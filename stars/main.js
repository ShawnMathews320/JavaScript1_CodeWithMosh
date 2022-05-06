showStars(5);

function showStars(rows) {
	star = '*';

	for (let i = 0; i <= rows; i++) {
		console.log(star.repeat(i));
	}
}
