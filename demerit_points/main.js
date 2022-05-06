function checkSpeed(speed) {
	const speedLimit = 70;
	const pointsPerMile = 5;
	const maxPoints = 12;

	if (speed < speedLimit + pointsPerMile) return 'ok';
	else if (speed - speedLimit > 0) {
		const totalPoints = Math.floor((speed - speedLimit) / pointsPerMile);
		return totalPoints >= maxPoints
			? 'Licence Suspended'
			: `Points: ${totalPoints}`;
	}
}

console.log(checkSpeed(130));
