import "./collection-item.styles.scss";

import React from "react";
import { useActions } from "../../redux/use-actions";

import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({ item }) => {
	const { name, price, imageUrl } = item;
	const { addCartItem } = useActions();

	return (
		<div className="collection-item">
			<div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButton inverted onClick={() => addCartItem(item)}>
				Add to cart
			</CustomButton>
		</div>
	);
};

export default CollectionItem;
