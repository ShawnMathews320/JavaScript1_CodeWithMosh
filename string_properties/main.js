const movie = {
	title: 'a',
	releaseYear: 2018,
	rating: 4.5,
	director: 'b',
};

showProperties(movie);

function showProperties(obj) {
	for (let [key, value] of Object.entries(obj)) {
		if (typeof value === 'string') console.log(key, value);
	}
}
