import "./header.styles.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => {
	const activeStyle = { fontWeight: 700 };

	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo />
			</Link>
			<div className="options">
				<NavLink
					className="option"
					style={({ isActive }) => (isActive ? activeStyle : undefined)}
					to="shop"
				>
					SHOP
				</NavLink>
				<NavLink
					className="option"
					style={({ isActive }) => (isActive ? activeStyle : undefined)}
					to="contact"
				>
					CONTACT
				</NavLink>
			</div>
		</div>
	);
};

export default Header;
