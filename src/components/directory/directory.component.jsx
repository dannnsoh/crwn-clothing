import "./directory.styles.scss";
import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.component";
import sections from "./directory.data";

const Directory = () => {
	const [data, setData] = useState(sections);

	return (
		<div className="directory-menu">
			{data.map(({ id, ...rest }) => {
				return <MenuItem key={id} {...rest} />;
			})}
		</div>
	);
};

export default Directory;
