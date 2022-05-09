const address1 = new ConstructorAddress('a', 'b', 'c');
const address2 = new ConstructorAddress('a', 'b', 'c');

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

function ConstructorAddress(street, city, zipCode) {
	this.street = street;
	this.city = city;
	this.zipCode = zipCode;
}

function areEqual(address1, address2) {
	if (address1.length !== address2.length) return false;

	for (let key of Object.keys(address1)) {
		if (address1[key] !== address2[key]) return false;
	}

	return true;
}

function areSame(address1, address2) {
	return address1 === address2;
}
