import React, { useState } from "react";
import useActions from "../../redux/use-actions";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignUpContainer, SignUpTitle } from "./sign-up.styles";

const SignUp = () => {
	const { signUpStart } = useActions();
	const [input, setInput] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: ""
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

		const { confirmPassword, ...rest } = input;
		if (rest.password !== confirmPassword) {
			alert("Passwords don't match!");
			return;
		}
		signUpStart(rest);
		setInput({
			displayName: "",
			email: "",
			password: "",
			confirmPassword: ""
		});
	};

	return (
		<SignUpContainer>
			<SignUpTitle>I do not have an account</SignUpTitle>
			<span>Sign up with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={input.displayName}
					label="Name"
					onChange={handleInput}
					required
				/>
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
				<FormInput
					type="password"
					name="confirmPassword"
					value={input.confirmPassword}
					label="Confirm Password"
					onChange={handleInput}
					required
				/>

				<CustomButton type="submit">Sign Up</CustomButton>
			</form>
		</SignUpContainer>
	);
};

export default SignUp;
