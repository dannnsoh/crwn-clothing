import "./App.scss";

import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { auth, createUser } from "./firebase/firebase.utils";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Auth from "./pages/auth/auth.component";

function App() {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const [userRef, userSnap] = await createUser(userAuth);
				const data = userSnap.data();
				setCurrentUser({
					id: userSnap.id,
					...data
				});
			} else {
				setCurrentUser(null);
			}
		});

		return unsubscribe;
	}, []);

	return (
		<div className="test">
			<Header currentUser={currentUser} />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="shop" element={<ShopPage />} />
				<Route path="signin" element={<Auth />} />
			</Routes>
		</div>
	);
}

export default App;
