import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeForm from "../../components/stripe-form/stripe-form.component";
import axios from "axios";

const stripePromise = loadStripe(
	"pk_test_51JxoqELHXI7LA80Mb8QN0o1YTIx8uC91lYLyfQXelcBITOXsruhhzfVkF7Oh2VR2XxLObiY2jkMyzA6q8z91v5nl00mU9nwdMF"
);

const PaymentPage = () => {
	const cartItems = useSelector(state => state.cart.cartItems);
	const [option, setOption] = useState("");

	const getSecret = useCallback(async () => {
		const response = await axios.post("http://localhost:5000/payment", cartItems);
		setOption(response.data.clientSecret);
	}, [cartItems]);

	useEffect(() => {
		getSecret();
	}, [getSecret]);

	return (
		<div>
			{option ? (
				<Elements stripe={stripePromise} options={{ clientSecret: option }}>
					<StripeForm />
				</Elements>
			) : null}
		</div>
	);
};

export default PaymentPage;
