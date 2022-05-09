const numbers = [1, 2, 3, 4];

const count = countOccurrences(numbers, 1);

console.log(count);

function countOccurrences(array, searchElement) {
	if (!array.includes(searchElement)) return 0;

	return array.reduce((prev, curr) => {
		const occurrence = curr == searchElement ? 1 : 0;
		return prev + occurrence;
	}, 0);
}
