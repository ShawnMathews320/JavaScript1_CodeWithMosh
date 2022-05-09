const address = factoryAddress('somewhere', 'seattle', 'none');
const address2 = new ConstructorAddress('somewhere', 'seattle', 'none');

console.log(address2);
showAddress(address);

function showAddress(address) {
	for (let entry of Object.entries(address)) console.log(entry);
}

function factoryAddress(street, city, zipCode) {
	return {
		street,
		city,
		zipCode,
	};
}

function ConstructorAddress(street, city, zipCode) {
	this.street = street;
	this.city = city;
	this.zipCode = zipCode;
}
