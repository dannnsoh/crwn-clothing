import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

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
export const firestore = getFirestore(firebaseApp);

// Google Auth for sign in
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
