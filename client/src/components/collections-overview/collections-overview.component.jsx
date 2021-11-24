import React from "react";
import { useSelector } from "react-redux";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { CollectionsOverviewContainer } from "./collections-overview.styles";

const CollectionsOverview = () => {
	const collections = useSelector(state => state.shop.collections);

	return (
		<CollectionsOverviewContainer>
			{collections
				? Object.values(collections).map(({ id, ...rest }) => {
						return <CollectionPreview key={id} {...rest} />;
				  })
				: null}
		</CollectionsOverviewContainer>
	);
};

export default CollectionsOverview;
