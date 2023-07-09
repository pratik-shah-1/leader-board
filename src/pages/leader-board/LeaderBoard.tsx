import React, { useState, useEffect } from 'react';

// UI
import { StyledLeaderBoardWrapper } from '../../ui/components/LeaderBoard';
import { StyledULWrapper } from '../../ui/components/List';

// Components
import ListContainer from '../../components/ListContainer';

// Constants
import { PLAYERS } from '../../constants/players';
import { SHUFFLE_INTERVAL_GAP } from '../../constants/common';

// Interfaces
import { IPlayerData } from '../../interfaces/player';

// Utils
import { getRandomIndex, getScore, getSortByKey } from '../../utils/common';

const LeaderBoard = () => {
	const [playerList, setPlayerList] = useState<IPlayerData[]>(PLAYERS);

	useEffect(() => {
		// Shuffle-logic
		const shuffleInterval = setInterval(() => {
			const randomIndex = getRandomIndex();

			const shuffledList = playerList.map((record, index) => {
				return {
					...record,
					oldIndex: index,
					score: getScore({
						index,
						randomIndex,
						score: record.score,
					}),
				};
			});

			const sortedShuffledList = getSortByKey(shuffledList);
			setPlayerList(sortedShuffledList);
		}, SHUFFLE_INTERVAL_GAP);

		return () => {
			clearInterval(shuffleInterval);
		};
	}, [playerList]);

	return (
		<StyledLeaderBoardWrapper>
			<StyledULWrapper>
				<ListContainer data={playerList} />
			</StyledULWrapper>
		</StyledLeaderBoardWrapper>
	);
};

export default LeaderBoard;
