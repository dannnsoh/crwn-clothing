import "./directory.styles.scss";

import React from "react";
import { useSelector } from "react-redux";

import MenuItem from "../menu-item/menu-item.component";

const Directory = () => {
	const sections = useSelector(state => state.directory.sections);

	return (
		<div className="directory-menu">
			{sections.map(({ id, ...rest }) => {
				return <MenuItem key={id} {...rest} />;
			})}
		</div>
	);
};

export default Directory;
