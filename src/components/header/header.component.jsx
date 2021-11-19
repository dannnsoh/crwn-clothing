import "./header.styles.scss";

import React from "react";
import { auth } from "../../firebase/firebase.utils";

import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser }) => {
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
					Shop
				</NavLink>
				<NavLink
					className="option"
					style={({ isActive }) => (isActive ? activeStyle : undefined)}
					to="contact"
				>
					Contact
				</NavLink>
				{currentUser ? (
					<NavLink className="option" onClick={() => auth.signOut()} to="/">
						Sign Out
					</NavLink>
				) : (
					<NavLink
						className="option"
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
						to="/signin"
					>
						Sign In
					</NavLink>
				)}
			</div>
		</div>
	);
};

export default Header;
