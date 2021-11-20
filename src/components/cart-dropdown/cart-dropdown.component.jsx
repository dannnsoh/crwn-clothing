import "./cart-dropdown.styles.scss";

import React from "react";
import { useActions } from "../../redux/use-actions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
	const { toggleCartHidden } = useActions();
	const cartItems = useSelector(state => state.cart.cartItems);
	const navigate = useNavigate();

	return (
		<div className="cart-dropdown">
			<div
				className="cart-items"
				style={cartItems[2] ? { overflowY: "scroll" } : {}}
			>
				{cartItems.length ? (
					cartItems.map(item => {
						return <CartItem key={item.id} item={item} />;
					})
				) : (
					<span className="empty-message">Your cart is empty.</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					navigate("/checkout", { replace: true });
					toggleCartHidden();
				}}
			>
				Go to checkout
			</CustomButton>
		</div>
	);
};

export default CartDropdown;
