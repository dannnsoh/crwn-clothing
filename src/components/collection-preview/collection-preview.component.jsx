import "./collection-preview.styles.scss";
import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title}</h1>
			<div className="preview">
				{items.map((item, index) =>
					index < 4 ? <CollectionItem key={item.id} item={item} /> : null
				)}
			</div>
		</div>
	);
};

export default CollectionPreview;
