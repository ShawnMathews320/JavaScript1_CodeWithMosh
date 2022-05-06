showPrimes(20);

function checkIsPrime(number) {
	for (let checkFactor = 2; checkFactor < number; checkFactor++)
		if (number % checkFactor === 0) return false;

	return true;
}

function showPrimes(stop) {
	for (let number = 2; number <= stop; number++) {
		if (checkIsPrime(number)) console.log(number);
	}
}
