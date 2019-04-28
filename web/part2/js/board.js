var BOARD_SIZE = 5;
var rewards = {
	'neutral': 0,
	'monster': 10,
	'treasure': -10,
};


function createProbabilities() {
	let x = Math.random();
	let y = Math.random();

	let lower = Math.min(x, y);
	let upper = Math.max(x, y);
	return [lower, upper - lower, 1 - upper];
}

function createBoard() {
	let board = Array(BOARD_SIZE).fill(0).map(x => Array(BOARD_SIZE).fill(0));
	for (let i=0; i<BOARD_SIZE; i++)
		for (let j=0; j < BOARD_SIZE; j++)
			board[i][j] = createProbabilities();
	return board;
}

function updateReward(position) {
	let { x, y } = position;
	let cellProbabilities = boardProbabilities[y][x];
	let reward = getReward(cellProbabilities);
	totalReward += reward;

	renderReward();
	renderGrid(position);
}

function getReward(cellProbabilities) {
	let [p1, p2, p3] = cellProbabilities;
	let randVal = Math.random();

	if (randVal < p1) return rewards.neutral;
	if (randVal < p2) return rewards.monster;
	return rewards.treasure;
}
