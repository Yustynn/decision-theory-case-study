function resetHistory() {
	history = [];
}

function addHistory(position, rewardType) {
	let { x, y } = position;
	let obj = [x, y, rewardType];
	history.push(obj);
}

function printHistory() {
	let string = JSON.stringify(history);
	console.log(string);
}