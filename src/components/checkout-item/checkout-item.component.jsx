import "./checkout-item.styles.scss";

import React from "react";
import { useActions } from "../../redux/use-actions";

const CheckoutItem = ({ item }) => {
	const { name, imageUrl, price, quantity, id } = item;
	const { clearCartItem, addCartItem, removeCartItem } = useActions();

	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeCartItem(item)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addCartItem(item)}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={() => clearCartItem(id)}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;
