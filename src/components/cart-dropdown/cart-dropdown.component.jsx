import "./cart-dropdown.styles.scss";

import React from "react";
import { useSelector } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
	const cartItems = useSelector(state => state.cart.cartItems);

	return (
		<div className="cart-dropdown">
			<div
				className="cart-items"
				style={cartItems[2] ? { overflowY: "scroll" } : {}}
			>
				{cartItems.map(item => {
					return <CartItem key={item.id} item={item} />;
				})}
			</div>
			<CustomButton>Go to checkout</CustomButton>
		</div>
	);
};

export default CartDropdown;
