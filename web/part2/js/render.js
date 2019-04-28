function renderGrid(position) {
	let style = 'repeat(' + String(BOARD_SIZE) + ', 100px)';
	$('#main').css('grid-template-columns', style);
	$('#main').css('grid-template-rows', style);

	let ordinaryCell = '<div class="cell"></div>\n';
	let activeCell = '<div class="cell active"><i class="large material-icons">child_care</i></div>\n';

	let htmlString = '';
	for (let i=0; i<BOARD_SIZE; i++) {
		for (let j=0; j<BOARD_SIZE; j++) {
			if (i == position.y && j == position.x) htmlString += activeCell;
			else htmlString += ordinaryCell;
		}
	}
	$('#main').html(htmlString);
}

function renderReward() {
	$('#steps').html(remainingSteps);
	$('#reward').html(totalReward);
}