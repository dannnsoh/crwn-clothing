import "./collection-preview.styles.scss";
import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title}</h1>
			<div className="preview">
				{items
					.filter((item, index) => index < 4)
					.map(({ id, ...rest }) => {
						return <CollectionItem key={id} {...rest} />;
					})}
			</div>
		</div>
	);
};

export default CollectionPreview;
