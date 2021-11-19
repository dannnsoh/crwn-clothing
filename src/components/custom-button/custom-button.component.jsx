import "./custom-button.styles.scss";
import React from "react";

const CustomButton = ({ children, isGoogleSignIn, ...rest }) => {
	return (
		<button
			className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
			{...rest}
		>
			{children}
		</button>
	);
};

export default CustomButton;
