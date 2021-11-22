import React from "react";
import { useActions } from "../../redux/use-actions";

import {
	CollectionItemContainer,
	BackgroundImage,
	AddButton,
	CollectionFooterContainer,
	NameContainer,
	PriceContainer
} from "./collection-item.styles";

const CollectionItem = ({ item }) => {
	const { name, price, imageUrl } = item;
	const { addCartItem } = useActions();

	return (
		<CollectionItemContainer>
			<BackgroundImage imageUrl={imageUrl} />
			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer>{price}</PriceContainer>
			</CollectionFooterContainer>
			<AddButton onClick={() => addCartItem(item)}>Add to cart</AddButton>
		</CollectionItemContainer>
	);
};

export default CollectionItem;
