import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import {
	CollectionPreviewContainer,
	TitleContainer,
	PreviewContainer
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => {
	return (
		<CollectionPreviewContainer>
			<TitleContainer>{title}</TitleContainer>
			<PreviewContainer>
				{items.map((item, index) =>
					index < 4 ? <CollectionItem key={item.id} item={item} /> : null
				)}
			</PreviewContainer>
		</CollectionPreviewContainer>
	);
};

export default CollectionPreview;
