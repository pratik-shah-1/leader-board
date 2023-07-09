import React from 'react';

// UI
import { StyledLI } from '../../ui/components/List';

// Components
import Profile from '../Profile';
import Score from '../Score';

// Interfaces
import { IListItemsProps } from './ListItem.interface';

const ListItem = ({
	oldIndex,
	index,
	picture,
	name,
	score,
}: IListItemsProps) => {
	return (
		<StyledLI start={60 * oldIndex} end={60 * index}>
			<Profile
				name={name}
				index={index}
				picture={`assets/images/${picture}`}
			/>
			<Score currentScore={score} />
		</StyledLI>
	);
};

export default ListItem;
