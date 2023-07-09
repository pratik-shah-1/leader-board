import styled from 'styled-components';

// Constants
import { COLORS } from '../../constants/colors';

export const StyledLeaderBoardWrapper = styled.div`
	min-height: 100vh;
	padding: 20px;
	display: flex;
	flex-direction: column;
	background-color: ${COLORS.leaderBoardWrapper.background};
`;
