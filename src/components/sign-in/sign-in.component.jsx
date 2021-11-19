import "./sign-in.styles.scss";

import React, { useState } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const SignIn = () => {
	const [input, setInput] = useState({
		email: "",
		password: ""
	});

	const handleInput = event => {
		const { value, name } = event.target;
		setInput(prev => {
			return {
				...prev,
				[name]: value
			};
		});
	};

	const handleSubmit = async event => {
		event.preventDefault();

		const { email, password } = input;
		try {
			await signInWithEmailAndPassword(auth, email, password);
			setInput({
				email: "",
				password: ""
			});
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					type="email"
					name="email"
					value={input.email}
					label="Email"
					onChange={handleInput}
					required
				/>
				<FormInput
					type="password"
					name="password"
					value={input.password}
					label="Password"
					onChange={handleInput}
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
