import { takeLatest, all, call, put } from "redux-saga/effects";
import {
	auth,
	googleProvider,
	createUser,
	getCurrentUser
} from "../../firebase/firebase.utils";
import {
	signInWithEmailAndPassword,
	signInWithPopup,
	createUserWithEmailAndPassword
} from "firebase/auth";
import { getDoc } from "firebase/firestore";

import UserActionTypes from "./user.types";
import {
	signInSuccess,
	signInFailure,
	signOutFailure,
	signOutSuccess,
	signUpFailure,
	signUpSuccess
} from "./user.action-creators";

// get snapshot from user auth object, similar steps for google and email sign in
export function* getSnapShotFromUserAuth(userAuth, additionalData) {
	try {
		const userRef = yield call(createUser, userAuth, additionalData);
		const userSnap = yield getDoc(userRef);
		yield put(signInSuccess({ id: userSnap.id, ...userSnap.data() }));
	} catch (err) {
		yield put(signInFailure(err));
	}
}

// Google sign in
export function* signInWithGoogle() {
	try {
		const { user } = yield signInWithPopup(auth, googleProvider);
		yield getSnapShotFromUserAuth(user);
	} catch (err) {
		yield put(signInFailure(err));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

// Email sign in
export function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield signInWithEmailAndPassword(auth, email, password);
		yield getSnapShotFromUserAuth(user);
	} catch (err) {
		yield put(signInFailure(err));
	}
}

export function* onEmailSignInStart() {
	yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

// Check user session
export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;
		yield getSnapShotFromUserAuth(userAuth);
	} catch (err) {
		yield put(signInFailure(err));
	}
}

export function* onCheckUserSession() {
	yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

// Sign out
export function* signOut() {
	try {
		yield auth.signOut();
		yield put(signOutSuccess());
	} catch (err) {
		yield put(signOutFailure(err));
	}
}

export function* onSignOutStart() {
	yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

// Sign up
export function* signUp({ payload: { displayName, email, password } }) {
	try {
		const { user } = yield createUserWithEmailAndPassword(auth, email, password);
		yield put(signUpSuccess({ user, additionalData: { displayName } }));
	} catch (err) {
		yield put(signUpFailure(err));
	}
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
	try {
		yield getSnapShotFromUserAuth(user, additionalData);
	} catch (err) {
		yield put(signInFailure(err));
	}
}

export function* onSignUpStart() {
	yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
	yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export default function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onCheckUserSession),
		call(onSignOutStart),
		call(onSignUpStart),
		call(onSignUpSuccess)
	]);
}
