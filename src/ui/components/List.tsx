import styled from 'styled-components';

// Constants
import { COLORS } from '../../constants/colors';

// Interfaces
import { IRowSwipeProps } from '../../interfaces/row-swipe';

// Utils
import { rowSwipe } from '../../utils/common';

export const StyledULWrapper = styled.div`
	width: 60%;
	height: auto;
	margin: 0 auto;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const StyledUL = styled.ul`
	height: 600px;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	position: relative;
	border-radius: 16px;
	background: ${COLORS.listContainer.background};
	overflow: hidden;
`;

export const StyledLI = styled.li<IRowSwipeProps>`
	height: 60px;
	display: flex;
	padding: 8px 24px;
	justify-content: space-between;
	background: ${COLORS.list.background};
	border-bottom: 1px solid ${COLORS.list.border};
	color: ${COLORS.list.text};
	font-size: 1.25rem;
	font-weight: 500;
	cursor: pointer;
	position: absolute;
	left: 0;
	right: 0;
	animation: ${(props) => rowSwipe(props)} 0.7s ease-out;
	animation-fill-mode: forwards;
	&:nth-child(even) {
		background: ${COLORS.evenList.background};
	}
	&:hover {
		background: ${COLORS.list.backgroundHover};
		color: ${COLORS.list.textHover};
	}
	&:first-child {
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
	}
	&:last-child {
		border-bottom: none;
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
	}
`;
