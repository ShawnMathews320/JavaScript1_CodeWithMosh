const numbers = arrayFromRange(-11, 4);

console.log(numbers);

function arrayFromRange(min, max) {
	const arr = [];

	for (let i = min; i <= max; i++) arr.push(i);

	return arr;
}
