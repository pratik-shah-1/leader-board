import React, { useMemo } from 'react';

// UI
import {
	StyledProfile,
	StyledProfileWrapper,
	StyledProfilePicture,
} from '../../ui/components/Profile';

// Constants
import { MEDALS } from '../../constants/common';

// Interfaces
import { IProfileProps } from './Profile.interface';

const Profile = ({ name, picture, index }: IProfileProps) => {
	const badgeClass = useMemo(() => {
		switch (index) {
			case 1:
				return MEDALS.gold;
			case 2:
				return MEDALS.sliver;
			case 3:
				return MEDALS.bronze;
			default:
				return '';
		}
	}, [index]);

	return (
		<StyledProfileWrapper>
			<StyledProfile>
				<StyledProfilePicture src={picture} alt={name} />
				<span className={badgeClass}>{index + 1}</span>
			</StyledProfile>
			<span>{name}</span>
		</StyledProfileWrapper>
	);
};

export default Profile;
