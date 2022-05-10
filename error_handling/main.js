const numbers = [1, 2, 3, 4];

try {
	const count = countOccurrences(numbers, 1);
	console.log(count);
} catch (e) {
	console.log(e);
}

function countOccurrences(array, searchElement) {
	if (!Array.isArray(array)) throw new Error('Invalid type, need array');

	if (!array.includes(searchElement)) return 0;

	return array.reduce((prev, curr) => {
		const occurrence = curr == searchElement ? 1 : 0;
		return prev + occurrence;
	}, 0);
}
