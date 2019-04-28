var keycodes = {
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40,
};


function moveUp() {
	if (remainingSteps == 0) return;
	if (position.y == 0) return;
	remainingSteps -= 1;
	position.y -= 1;

	updateReward(position);
}

function moveDown() {
	if (remainingSteps == 0) return;
	if (position.y == BOARD_SIZE-1) return;
	remainingSteps -= 1;
	position.y += 1;

	updateReward(position);
}

function moveLeft() {
	if (remainingSteps == 0) return;
	if (position.x == 0) return;
	remainingSteps -= 1;
	position.x -= 1;

	updateReward(position);
}

function moveRight() {
	if (remainingSteps == 0) return;
	if (position.x == BOARD_SIZE-1) return;
	remainingSteps -= 1;
	position.x += 1;

	updateReward(position);
}

$(document).keydown(e => {
	if (e.which === keycodes.UP) moveUp();
	if (e.which === keycodes.DOWN) moveDown();
	if (e.which === keycodes.LEFT) moveLeft();
	if (e.which === keycodes.RIGHT) moveRight();
});