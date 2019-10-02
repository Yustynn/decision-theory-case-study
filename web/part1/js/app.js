var clicks = 0;
var pastReward = 0;
var totalReward = 0;

var distributions = [
	{
		mean: 1,
		variance: 1,
	},
	{
		mean: 1,
		variance: 2,
	},
	{
		mean: 1,
		variance: 5,
	},
	{
		mean: 1,
		variance: 100,
	},
];


function randomNormal(mean, variance) {
	// Box-Muller transform for generating Gaussian values
	let u = 0, v = 0;
	while (u === 0) u = Math.random();
	while (v === 0) v = Math.random();
	z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

	return mean + Math.sqrt(variance) * z;
}

function onClick(distribution) {
	let { mean, variance } = distribution;
	let reward = randomNormal(mean, variance);

	clicks += 1;
	pastReward = reward;
	totalReward += reward;

	updateRewardsOnHtml();
}

function updateRewardsOnHtml() {
	document.getElementById('clicks').innerHTML = String(clicks);
	document.getElementById('past').innerHTML = pastReward.toFixed(2);
	document.getElementById('total').innerHTML = totalReward.toFixed(2);
}


for (let i=0; i<distributions.length; i++) {
	let { mean, variance } = distributions[i];
	let elemId = `btn${i+1}`;
	let html = `
		<div id="${elemId}" class="btn waves-effect waves-light">
			<h1>${i+1}</h1>
			<p>Mean: ${mean}</p>
			<p>Variance: ${variance}</p>
		</div>
	`
	document.getElementById('btnContainer').innerHTML += html;
}

for (let i=0; i<distributions.length; i++) {
	let elemId = `btn${i+1}`;
	document.getElementById(elemId).addEventListener('click', onClick.bind(this, distributions[i]));
}
