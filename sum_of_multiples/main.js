console.log(sum(10));

function sum(stop) {
	let count_sum = 0;

	for (let i = 1; i <= stop; i++) {
		if (i % 3 === 0 || i % 5 === 0) count_sum += i;
	}

	return count_sum;
}
