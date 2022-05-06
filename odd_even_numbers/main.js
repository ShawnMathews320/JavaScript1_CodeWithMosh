showNumbers(10);

function showNumbers(stop) {
	for (let i = 0; i <= stop; i++) {
		const evenOrOdd = i % 2 == 0 ? 'EVEN' : 'ODD';
		console.log(i, evenOrOdd);
	}
}
