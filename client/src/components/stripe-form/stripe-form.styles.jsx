import styled from "styled-components";
import CustomButton from "../../components/custom-button/custom-button.component";

export const PaymentContainer = styled.div`
	width: 600px;
	display: flex;
	flex-direction: column;
	margin: 200px auto;
	text-align: center;
	border: solid 1px #d1d1d1;
	border-radius: 20px;
	box-shadow: 0px 8px 10px #8a8a8a;
	padding: 50px;
`;

export const WarningContainer = styled.div`
	text-align: center;
	margin-top: 40px;
	font-size: 20px;
	font-weight: bold;
	color: #ff4d5a;
`;

export const PaymentButton = styled(CustomButton)`
	width: 100px;
	margin-top: 50px;
`;
