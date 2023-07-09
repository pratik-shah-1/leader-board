import styled from 'styled-components';

// Constants
import { COLORS } from '../../constants/colors';

export const StyledProfileWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const StyledProfile = styled.div`
	width: 40px;
	height: 40px;
	margin-right: 20px;
	border-radius: 50%;
	background: ${COLORS.profile.background};
	box-shadow: 0 0 4px ${COLORS.profile.boxShadow};
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	span {
		position: absolute;
		bottom: 1px;
		right: -8px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 20px;
		height: 20px;
		font-size: 0.75rem;
		font-weight: bold;
		border: 0.5px solid white;
		border-radius: 50%;
		color: ${COLORS.profile.badge.regular.text};
		background: ${COLORS.profile.badge.regular.background};
		&.gold {
			background: ${COLORS.profile.badge.gold.background};
			color: ${COLORS.profile.badge.gold.text};
		}
		&.silver {
			background: ${COLORS.profile.badge.silver.background};
			color: ${COLORS.profile.badge.silver.text};
		}
		&.bronze {
			background: ${COLORS.profile.badge.bronze.background};
			color: ${COLORS.profile.badge.bronze.text};
		}
	}
`;

export const StyledProfilePicture = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
`;
