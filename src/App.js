import "./App.scss";

import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Auth from "./pages/auth/auth.component";

function App() {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			if (user) {
				setCurrentUser(user);
				console.log(`${user.displayName} has logged in!`);
			} else {
				setCurrentUser(null);
				console.log("No user currently signed in");
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
