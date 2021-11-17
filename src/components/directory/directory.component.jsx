import "./directory.styles.scss";
import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.component";
import sections from "./directory.data";

const Directory = () => {
	const [data, setData] = useState(sections);

	return (
		<div className="directory-menu">
			{data.map(({ title, imageUrl, id, size }) => {
				return (
					<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
				);
			})}
		</div>
	);
};

export default Directory;
