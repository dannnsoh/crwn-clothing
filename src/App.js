import "./App.scss";

import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { auth, createUser } from "./firebase/firebase.utils";
import { useSelector } from "react-redux";
import { useActions } from "./redux/use-actions";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Auth from "./pages/auth/auth.component";
import CheckoutPage from "./pages/checkout/checkout.component";

function App() {
	const currentUser = useSelector(state => state.user.currentUser);
	const { setCurrentUser } = useActions();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const { userSnap } = await createUser(userAuth);
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
	}, [setCurrentUser]);

	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="shop/*" element={<ShopPage />} />
				<Route path="checkout" element={<CheckoutPage />} />
				<Route
					path="signin"
					element={currentUser ? <Navigate to="/" replace /> : <Auth />}
				/>
			</Routes>
		</div>
	);
}

export default App;
