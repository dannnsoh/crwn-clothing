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
	OptionNavLink,
	OptionLink
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
				<OptionNavLink to="shop">Shop</OptionNavLink>
				<OptionNavLink to="contact">Contact</OptionNavLink>
				{currentUser ? (
					<OptionLink onClick={() => auth.signOut()} to="/">
						Sign Out
					</OptionLink>
				) : (
					<OptionNavLink to="/signin">Sign In</OptionNavLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{hidden ? null : <CartDropdown />}
		</HeaderContainer>
	);
};

export default Header;
