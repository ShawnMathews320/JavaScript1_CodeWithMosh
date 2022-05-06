const scores = [80, 80, 50];

console.log(calculateGrade(scores));

function getAverage(scores) {
	sum = 0;

	for (let i of scores) {
		sum += i;
	}

	return (sum /= scores.length);
}

function getChar(average) {
	if (average < 60) return 'F';
	if (average < 70) return 'D';
	if (average < 80) return 'C';
	if (average < 90) return 'B';
	return 'A';
}

function calculateGrade(scores) {
	average = getAverage(scores);
	return getChar(average);
}
