import "./collections-overview.styles.scss";

import React from "react";
import { useSelector } from "react-redux";

import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionsOverview = () => {
	const collections = useSelector(state => state.shop.collections);

	return (
		<div className="collections-overview">
			{Object.values(collections).map(({ id, ...rest }) => {
				return <CollectionPreview key={id} {...rest} />;
			})}
		</div>
	);
};

export default CollectionsOverview;
