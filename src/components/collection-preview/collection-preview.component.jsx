import React from "react";
import { useNavigate } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";
import {
	CollectionPreviewContainer,
	TitleContainer,
	PreviewContainer
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => {
	const navigate = useNavigate();

	return (
		<CollectionPreviewContainer>
			<TitleContainer onClick={() => navigate(`${title.toLowerCase()}`)}>
				{title}
			</TitleContainer>
			<PreviewContainer>
				{items.map((item, index) =>
					index < 4 ? <CollectionItem key={item.id} item={item} /> : null
				)}
			</PreviewContainer>
		</CollectionPreviewContainer>
	);
};

export default CollectionPreview;
