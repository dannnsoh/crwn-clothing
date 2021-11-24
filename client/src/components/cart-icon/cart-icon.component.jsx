import React from "react";
import useActions from "../../redux/use-actions";
import { useSelector } from "react-redux";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
	const { toggleCartHidden } = useActions();
	const cartItems = useSelector(state => state.cart.cartItems);

	return (
		<CartIconContainer
			onClick={() => {
				toggleCartHidden();
			}}
		>
			<ShoppingIcon />
			<ItemCount>
				{cartItems !== null && cartItems.length
					? cartItems.reduce((acc, item) => acc + item.quantity, 0)
					: 0}
			</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
