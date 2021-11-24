import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useActions from "./redux/use-actions";

import { GlobalStyle } from "./global.styles";
import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error.boundary.component";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));
const Auth = lazy(() => import("./pages/auth/auth.component"));
const PaymentPage = lazy(() => import("./pages/payment/paymentPage.component"));

const App = () => {
	const { checkUserSession } = useActions();
	const currentUser = useSelector(state => state.user.currentUser);

	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div>
			<GlobalStyle />
			<Header />
			<ErrorBoundary>
				<Suspense fallback={<Spinner />}>
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
				</Suspense>
			</ErrorBoundary>
		</div>
	);
};

export default App;
