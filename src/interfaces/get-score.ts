export interface IGetScoreParams {
	index: number;
	randomIndex: number;
	score: number;
}

export interface IGetScore {
	(params: IGetScoreParams): number;
}
