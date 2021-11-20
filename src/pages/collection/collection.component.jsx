import "./collection.styles.scss";

import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = () => {
	const { categoryName } = useParams();
	const collection = useSelector(state => state.shop.collections[categoryName]);
	const { title, items } = collection;

	return (
		<div className="collection-page">
			<h2 className="title">{title}</h2>
			<div className="items">
				{items.map(item => {
					return <CollectionItem key={item.id} item={item} />;
				})}
			</div>
		</div>
	);
};

export default CollectionPage;
