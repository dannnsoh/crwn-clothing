import "./header.styles.scss";

import React, { useEffect } from "react";
import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";

import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = () => {
	const {
		user: { currentUser },
		cart: { hidden }
	} = useSelector(state => state);
	const activeStyle = { fontWeight: 700 };

	useEffect(() => {});

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
				<CartIcon />
			</div>
			{hidden ? null : <CartDropdown />}
		</div>
	);
};

export default Header;
