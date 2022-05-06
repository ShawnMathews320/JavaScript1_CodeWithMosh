function fizzBuzz(input) {
	res = input;
	if (input % 3 == 0 && input % 5 == 0) res = 'FizzBuzz';
	else if (input % 3 == 0) res = 'Fizz';
	else if (input % 5 == 0) res = 'Buzz';
	return res;
}

const output = 9;
if (typeof output === 'number') console.log(fizzBuzz(output));
else console.log(NaN);
