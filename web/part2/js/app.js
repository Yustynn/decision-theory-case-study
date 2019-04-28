var remainingSteps, totalReward, position;
var boardProbabilities = createBoard();

function reset() {
	remainingSteps = 20;
	totalReward = 0;
	position = {
		x: Math.floor(BOARD_SIZE / 2),
		y: Math.floor(BOARD_SIZE / 2),
	};

	renderGrid(position);
	renderReward();
}

reset();
$('#reset').click('on', reset);