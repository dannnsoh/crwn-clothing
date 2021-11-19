import "./auth.styles.scss";
import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const Auth = () => {
	return (
		<div className="auth">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default Auth;
