import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CollectionItem from "../../components/collection-item/collection-item.component";
import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItemsContainer
} from "./collection.styles";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionPage = () => {
	const { categoryName } = useParams();
	const collection = useSelector(state => state.shop.collections[categoryName]);
	const { title, items } = collection;

	return (
		<CollectionPageContainer>
			<CollectionTitle>{title}</CollectionTitle>
			<CollectionItemsContainer>
				{items.map(item => {
					return <CollectionItem key={item.id} item={item} />;
				})}
			</CollectionItemsContainer>
		</CollectionPageContainer>
	);
};

export default WithSpinner(CollectionPage);
