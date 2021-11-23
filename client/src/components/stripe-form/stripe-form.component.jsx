import React from "react";
import { useNavigate } from "react-router-dom";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { PaymentButton, WarningContainer, PaymentContainer } from "./stripe-form.styles";

const StripeForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const navigate = useNavigate();

	const handleSubmit = async event => {
		event.preventDefault();

		if (!stripe || !elements) {
			// disable form submission until Stripe.js has loaded.
			return;
		}

		const result = await stripe.confirmPayment({
			elements,
			redirect: "if_required"
			// confirmParams: {
			// 	return_url: "http://localhost:3000/checkout"
			// }
		});

		if (result.error) {
			alert(result.error.message);
		} else {
			alert("Payment complete!");
			navigate("/checkout", { replace: true });
		}
	};

	return (
		<PaymentContainer>
			<form onSubmit={handleSubmit}>
				<PaymentElement />
				<WarningContainer>
					*Please use the following test credit card for payments*
					<br />
					4242 4242 4242 4242 - Exp: Any future data - CV: Any 3 digits
				</WarningContainer>
				<PaymentButton disabled={!stripe}>Proceed</PaymentButton>
			</form>
		</PaymentContainer>
	);
};

export default StripeForm;
