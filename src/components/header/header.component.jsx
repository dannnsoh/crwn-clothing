import React, { useEffect } from "react";
import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	Option
} from "./header.styles";

const Header = () => {
	const currentUser = useSelector(state => state.user.currentUser);
	const hidden = useSelector(state => state.cart.hidden);

	useEffect(() => {});

	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo />
			</LogoContainer>
			<OptionsContainer>
				<Option to="shop">Shop</Option>
				<Option to="contact">Contact</Option>
				{currentUser ? (
					<Option onClick={() => auth.signOut()} to="/">
						Sign Out
					</Option>
				) : (
					<Option to="/signin">Sign In</Option>
				)}
				<CartIcon />
			</OptionsContainer>
			{hidden ? null : <CartDropdown />}
		</HeaderContainer>
	);
};

export default Header;
