const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, 3);

console.log(output);

function move(array, index, offset) {
	if (index === offset) return array;

	let position = index + offset;

	if (position < 0 || position >= array.length - 1) {
		console.error('Invalid offset');
		return;
	}

	const output = [...array];
	output.splice(index, 1);
	output.splice(position, 0, array[index]);

	return output;
}
