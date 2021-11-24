import styled from "styled-components";

export const ErrorImageOverlay = styled.div`
	height: 60vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 100px;
`;

export const ErrorImageContainer = styled.div`
	display: inline-block;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
	background-size: cover;
	background-position: center;
	width: 40vh;
	height: 40vh;
`;

export const ErrorImageText = styled.h2`
	font-size: 22px;
	color: #6e6e6e;
	text-align: center;
`;

export const ErrorImageTitle = styled.h1`
	font-size: 25px;
	color: #4e4e4e;
	text-align: center;
`;
