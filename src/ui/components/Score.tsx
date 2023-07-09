import styled from 'styled-components';

// Constants
import { COLORS } from '../../constants/colors';

export const StyledScoreBlock = styled.div`
	display: flex;
	align-items: center;
	h3 {
		font-size: 1.5rem;
		margin: 0 10px;
		@media screen and (max-width: 768px) {
			margin: 0;
		}
	}
	span {
		color: ${COLORS.scoreBlock.text};
		font-weight: 400;
		font-size: 1.125rem;
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;
