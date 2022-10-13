function toCamelCase(str) {
	if (str == '') return str;
	let newStr = str.replace(/_/g, "-");
	newStr = newStr.split('-');
	for (let i in newStr) {
		if (i != 0) {
			newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
		}
	}
	return newStr.join('');
}