import React from "react";
import { useSelector } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import {
	CheckoutPageContainer,
	CheckoutHeaderContainer,
	HeaderBlockContainer,
	TotalContainer,
	WarningContainer
} from "./checkout.styles";

const CheckoutPage = () => {
	const cartItems = useSelector(state => state.cart.cartItems);
	const total = cartItems.length
		? cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
		: 0;

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
			<WarningContainer>
				*Please use the following test credit card for payments
				<br />
				4242 4242 4242 4242 - Exp: Any future data - CV: Any 3 digits
			</WarningContainer>
			<StripeCheckoutButton price={total} />
		</CheckoutPageContainer>
	);
};

export default CheckoutPage;
