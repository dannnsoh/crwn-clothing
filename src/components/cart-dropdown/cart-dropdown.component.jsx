import React from "react";
import { useActions } from "../../redux/use-actions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {
	CartDropdownContainer,
	CartItemsContainer,
	EmptyMessage
} from "./cart-dropdown.styles";

const CartDropdown = () => {
	const { toggleCartHidden } = useActions();
	const cartItems = useSelector(state => state.cart.cartItems);
	const navigate = useNavigate();

	return (
		<CartDropdownContainer>
			<CartItemsContainer style={cartItems[2] ? { overflowY: "scroll" } : {}}>
				{cartItems.length ? (
					cartItems.map(item => {
						return <CartItem key={item.id} item={item} />;
					})
				) : (
					<EmptyMessage>Your cart is empty.</EmptyMessage>
				)}
			</CartItemsContainer>
			<CustomButton
				onClick={() => {
					navigate("/checkout", { replace: true });
					toggleCartHidden();
				}}
			>
				Go to checkout
			</CustomButton>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
