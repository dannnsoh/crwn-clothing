import React from "react";
import { useActions } from "../../redux/use-actions";

import {
	CheckoutItemContainer,
	ImageContainer,
	TextContainer,
	QuantityContainer,
	RemoveButtonContainer
} from "./checkout-item.styles";

const CheckoutItem = ({ item }) => {
	const { name, imageUrl, price, quantity, id } = item;
	const { clearCartItem, addCartItem, removeCartItem } = useActions();

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt="item" />
			</ImageContainer>
			<TextContainer>{name}</TextContainer>
			<QuantityContainer>
				<div onClick={() => removeCartItem(item)}>&#10094;</div>
				<span>{quantity}</span>
				<div onClick={() => addCartItem(item)}>&#10095;</div>
			</QuantityContainer>
			<TextContainer>{price}</TextContainer>
			<RemoveButtonContainer onClick={() => clearCartItem(id)}>
				&#10005;
			</RemoveButtonContainer>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
