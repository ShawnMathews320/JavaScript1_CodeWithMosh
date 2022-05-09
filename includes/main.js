const numbers = [1, 2, 3, 4];
findNumber = 5;

console.log(includes(numbers, findNumber));

function includes(array, searchElement) {
	return searchElement in array;
}
