import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

const config = {
	apiKey: "AIzaSyBrWrhPjiBTN-2CrxLQxZM1apOQzS9mlM0",
	authDomain: "crwn-db-48fc5.firebaseapp.com",
	projectId: "crwn-db-48fc5",
	storageBucket: "crwn-db-48fc5.appspot.com",
	messagingSenderId: "702679271358",
	appId: "1:702679271358:web:bee3f675b064e79e535bef",
	measurementId: "G-SQB7BPXNKH"
};

const firebaseApp = initializeApp(config);

// Auth
export const auth = getAuth(firebaseApp);

// Store
export const db = getFirestore(firebaseApp);
export const createUser = async (userAuth, userData) => {
	if (!userAuth) return;

	// querying db for user with the user id
	const userRef = doc(db, "users", `${userAuth.uid}`);
	const userSnap = await getDoc(userRef);

	// checks to see if user exists already, and if not, create new user
	if (!userSnap.exists()) {
		const { displayName, email } = userAuth;

		try {
			await setDoc(userRef, {
				displayName,
				email,
				time: serverTimestamp(),
				...userData
			});
		} catch (err) {
			console.log("Error creating user!!", err.message);
		}
	}

	return [userRef, userSnap];
};

// Google Auth for sign in
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = async () => {
	try {
		await signInWithPopup(auth, provider);
		console.log("Sign in successful!👍");
	} catch (err) {
		if (
			err.code === "auth/popup-closed-by-user" ||
			err.code === "auth/cancelled-popup-request"
		) {
			console.log("Google sign in failed. Please try again.");
		}
	}
};
