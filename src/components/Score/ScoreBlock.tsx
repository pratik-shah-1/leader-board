// UI
import { StyledScoreBlock } from '../../ui/components/Score';

// Components
import Score from './Score';

// Interfaces
import { IScoreBlockProps } from './ScoreBlock.interface';

const ScoreBlock = ({ currentScore }: IScoreBlockProps) => {
	return (
		<StyledScoreBlock>
			<Score currentScore={currentScore} />
			<span>points</span>
		</StyledScoreBlock>
	);
};

export default ScoreBlock;
