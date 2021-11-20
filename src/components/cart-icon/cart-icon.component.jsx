import "./cart-icon.styles.scss";

import React from "react";
import { useActions } from "../../redux/use-actions";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
	const { toggleCartHidden } = useActions();

	return (
		<div
			className="cart-icon"
			onClick={() => {
				toggleCartHidden();
			}}
		>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
};

export default CartIcon;
