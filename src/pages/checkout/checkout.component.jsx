import "./checkout.styles.scss";

import React from "react";
import { useSelector } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = () => {
	const cartItems = useSelector(state => state.cart.cartItems);
	const total = cartItems.length
		? cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
		: 0;

	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map(item => {
				return <CheckoutItem key={item.id} item={item} />;
			})}
			<div className="total">
				<span>TOTAL: ${total}</span>
			</div>
		</div>
	);
};

export default CheckoutPage;
