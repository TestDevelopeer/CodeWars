function createPhoneNumber(numbers) {
	let str = '(';
	numbers.map((item, index) => {
		if (index <= 2) {
			str += item;
			index == 2 ? str += ") " : '';
		} else if (index > 2 && index <= 5) {
			str += item;
			index == 5 ? str += '-' : '';
		} else {
			str += item;
		}
	});

	return str;
}