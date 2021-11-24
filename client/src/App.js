import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useActions from "./redux/use-actions";

import { GlobalStyle } from "./global.styles";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Auth from "./pages/auth/auth.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import PaymentPage from "./pages/payment/paymentPage.component";

function App() {
	const { checkUserSession } = useActions();
	const currentUser = useSelector(state => state.user.currentUser);

	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div>
			<GlobalStyle />
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="shop/*" element={<ShopPage />} />
				<Route path="checkout" element={<CheckoutPage />} />
				<Route path="payment" element={<PaymentPage />} />
				<Route
					path="signin"
					element={currentUser ? <Navigate to="/" replace /> : <Auth />}
				/>
			</Routes>
		</div>
	);
}

export default App;
