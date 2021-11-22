import React from "react";
import { useSelector } from "react-redux";

import MenuItem from "../menu-item/menu-item.component";
import { DirectoryMenuContainer } from "./directory.styles";

const Directory = () => {
	const sections = useSelector(state => state.directory.sections);

	return (
		<DirectoryMenuContainer>
			{sections.map(({ id, ...rest }) => {
				return <MenuItem key={id} {...rest} />;
			})}
		</DirectoryMenuContainer>
	);
};

export default Directory;
