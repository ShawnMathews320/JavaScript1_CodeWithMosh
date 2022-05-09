const numbers = [1, 2, 3, 4];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
	if (array.length === 0) return undefined;

	return array.reduce((prev, curr) => (curr > prev ? curr : prev));
}
