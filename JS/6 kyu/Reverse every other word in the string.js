function reverse(str) {
	str = str.trim()
	let newStr = str.split(' ');
	for (let i in newStr) {
		if (i % 2 != 0) newStr[i] = newStr[i].split('').reverse().join('');
	}
	return newStr.join(' ');
}