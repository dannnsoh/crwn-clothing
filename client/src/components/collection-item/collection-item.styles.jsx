import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
	width: 20vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;

	&:hover {
		.image,
		button {
			opacity: 0.8;
		}
	}

	@media screen and (max-width: 800px) {
		width: 40vw;

		&:hover {
			.image,
			button {
				opacity: unset;
			}
		}
	}
`;

export const AddButton = styled(CustomButton)`
	width: 50%;
	opacity: 0;
	position: absolute;
	top: 255px;
	transition: all 0.2s;

	@media screen and (max-width: 800px) {
		opacity: 0.8;
		min-width: unset;
		padding: 0 10px;
	}

	@media screen and (max-width: 550px) {
		width: 75%;
	}
`;

export const BackgroundImage = styled.div`
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
	transition: all 0.2s;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

export const NameContainer = styled.span`
	width: auto;
	margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
	width: auto;
	text-align: right;
`;
