import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
	CheckoutPageContainer,
	CheckoutHeaderContainer,
	HeaderBlockContainer,
	TotalContainer,
	CheckoutButton
} from "./checkout.styles";

const CheckoutPage = () => {
	const cartItems = useSelector(state => state.cart.cartItems);
	const total = cartItems.length
		? cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
		: 0;
	const navigate = useNavigate();

	return (
		<CheckoutPageContainer>
			<CheckoutHeaderContainer>
				<HeaderBlockContainer>
					<span>Product</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Description</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Quantity</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Price</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Remove</span>
				</HeaderBlockContainer>
			</CheckoutHeaderContainer>
			{cartItems.map(item => {
				return <CheckoutItem key={item.id} item={item} />;
			})}
			<TotalContainer>
				<span>TOTAL: ${total}</span>
			</TotalContainer>
			<CheckoutButton onClick={() => navigate("/payment", { replace: true })}>
				Proceed to payment
			</CheckoutButton>
		</CheckoutPageContainer>
	);
};

export default CheckoutPage;
