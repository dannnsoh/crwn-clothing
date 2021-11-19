import "./sign-in.styles.scss";

import React, { useState } from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form
				onSubmit={event => {
					event.preventDefault();
					setEmail("");
					setPassword("");
				}}
			>
				<FormInput
					type="email"
					value={email}
					label="Email"
					onChange={event => setEmail(event.target.value)}
					required
				/>
				<FormInput
					type="password"
					value={password}
					label="Password"
					onChange={event => setPassword(event.target.value)}
					required
				/>
				<div className="buttons">
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton isGoogleSignIn onClick={signInWithGoogle}>
						Sign In With Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
