import "./directory.styles.scss";
import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.component";
import data from "./directory.data";

const Directory = () => {
	const [sections, setSections] = useState(data);

	return (
		<div className="directory-menu">
			{sections.map(({ id, ...rest }) => {
				return <MenuItem key={id} {...rest} />;
			})}
		</div>
	);
};

export default Directory;
