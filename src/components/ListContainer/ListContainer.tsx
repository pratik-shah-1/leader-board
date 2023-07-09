import React from 'react';

// UI
import { StyledUL } from '../../ui/components/List';

// Components
import ListItem from '../ListItem';

// Interfaces
import { IListContainerProps } from './ListContainer.interface';

const ListContainer = ({ data }: IListContainerProps) => {
	return (
		<StyledUL>
			{data.map((item, index) => (
				<ListItem
					key={item.userId}
					name={item.name}
					userId={item.userId}
					picture={item.picture}
					oldIndex={item.oldIndex || index}
					index={index}
					score={item.score}
				/>
			))}
		</StyledUL>
	);
};

export default ListContainer;
