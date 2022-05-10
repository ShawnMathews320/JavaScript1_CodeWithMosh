console.log(sum([1, 2, 3, 4]));

function sum(...items) {
	if (Array.isArray(items[0]))
		return items[0].reduce((prev, curr) => prev + curr);

	return items.reduce((prev, curr) => prev + curr);
}
