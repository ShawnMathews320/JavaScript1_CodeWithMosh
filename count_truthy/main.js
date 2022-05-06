const array = [0, 1, 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
	let counter = 0;

	for (let i of array) {
		if (i) counter++;
	}

	return counter;
}
