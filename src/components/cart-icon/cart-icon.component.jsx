import "./cart-icon.styles.scss";

import React from "react";
import { useActions } from "../../redux/use-actions";
import { useSelector } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
	const { toggleCartHidden } = useActions();
	const cartItems = useSelector(state => state.cart.cartItems);

	return (
		<div
			className="cart-icon"
			onClick={() => {
				toggleCartHidden();
			}}
		>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">
				{cartItems.length
					? cartItems.reduce((acc, item) => acc + item.quantity, 0)
					: 0}
			</span>
		</div>
	);
};

export default CartIcon;
