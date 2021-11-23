import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	serverTimestamp,
	collection,
	writeBatch
} from "firebase/firestore";

const config = {
	apiKey: "AIzaSyBrWrhPjiBTN-2CrxLQxZM1apOQzS9mlM0",
	authDomain: "crwn-db-48fc5.firebaseapp.com",
	projectId: "crwn-db-48fc5",
	storageBucket: "crwn-db-48fc5.appspot.com",
	messagingSenderId: "702679271358",
	appId: "1:702679271358:web:bee3f675b064e79e535bef",
	measurementId: "G-SQB7BPXNKH"
};

// Initialize app with firebase
const firebaseApp = initializeApp(config);

// function to add data into firebase store
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = collection(db, collectionKey);

	const batch = writeBatch(db);
	objectsToAdd.forEach(object => {
		const newDocRef = doc(collectionRef);
		batch.set(newDocRef, object);
	});

	return await batch.commit();
};

// function to convert the collectionsSnapshot into an object with additional properties that we want such as routeName
export const convertCollectionsSnapshotToMap = collections => {
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data();
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		};
	});

	return transformedCollection.reduce((acc, collection) => {
		// eg. object["hats"] = hats, object["womens"] = womens
		acc[collection.title.toLowerCase()] = collection;
		return acc;
	}, {});
};

// get userAuth object when app first renders
export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
};

// Auth
export const auth = getAuth(firebaseApp);

// Store
export const db = getFirestore(firebaseApp);
export const createUser = async (userAuth, userData) => {
	if (!userAuth) return;

	// querying db for user with the user id
	// doc(FIRESTORE, PATH, PATH SEGMENTS) returns a docRef
	const userRef = doc(db, "users", `${userAuth.uid}`);
	// getDoc(QUERY) returns a querySnapshot
	const userSnap = await getDoc(userRef);

	// checks to see if user exists already, and if not, create new user
	if (!userSnap.exists()) {
		const { displayName, email } = userAuth;

		try {
			// setDoc(REF, DATA, OPTIONS?), options can be provided to merge with an existing doc
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

	return userRef;
};

// Google Auth for sign in
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
// export const signInWithGoogle = async () => {
// 	try {
// 		await signInWithPopup(auth, googleProvider);
// 		console.log("Sign in successful!👍");
// 	} catch (err) {
// 		if (
// 			err.code === "auth/popup-closed-by-user" ||
// 			err.code === "auth/cancelled-popup-request"
// 		) {
// 			console.log("Google sign in failed. Please try again.");
// 		}
// 	}
// };
