import React from "react";
import { useSelector } from "react-redux";
import useActions from "../../redux/use-actions";

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
	const { signOutStart } = useActions();

	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo />
			</LogoContainer>
			<OptionsContainer>
				<OptionNavLink to="shop">Shop</OptionNavLink>
				<OptionNavLink to="contact">Contact</OptionNavLink>
				{currentUser ? (
					<OptionLink onClick={signOutStart} to="/">
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
