import "./custom-button.styles.scss";
import React from "react";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...rest }) => {
	return (
		<button
			className={`${inverted ? "inverted" : ""} ${
				isGoogleSignIn ? "google-sign-in" : ""
			} custom-button`}
			{...rest}
		>
			{children}
		</button>
	);
};

export default CustomButton;
