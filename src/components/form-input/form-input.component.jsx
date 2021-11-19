import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ setValue, label, ...rest }) => {
	return (
		<div className="form-group">
			<input
				className="form-input"
				onChange={event => setValue(event.target.value)}
				{...rest}
			/>
			{label ? (
				<label
					className={`${rest.value.length ? "shrink" : ""} form-input-label`}
				>
					{label}
				</label>
			) : null}
		</div>
	);
};

export default FormInput;
