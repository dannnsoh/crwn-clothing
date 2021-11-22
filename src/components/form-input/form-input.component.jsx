import React from "react";

import { FormInputContainer, FormInputLabel, GroupContainer } from "./form-input.styles";

const FormInput = ({ setValue, label, ...rest }) => {
	return (
		<GroupContainer>
			<FormInputContainer
				onChange={event => setValue(event.target.value)}
				{...rest}
			/>
			{label ? (
				<FormInputLabel className={`${rest.value.length ? "shrink" : ""}`}>
					{label}
				</FormInputLabel>
			) : null}
		</GroupContainer>
	);
};

export default FormInput;
