function ascendDescend(length, minimum, maximum) {
	if (maximum < minimum) return "";
	let str = "";
	let counter = minimum;
	let toUp = true;
	while (str.length < length) {
		if (minimum == maximum) counter = minimum;
		str += `${counter}`;
		if (counter == maximum) toUp = false;
		if (counter == minimum) toUp = true;
		if (toUp) {
			counter++
		} else {
			counter--;
		}
	}
	if (str.length > length) {
		str = str.slice(0, length);
	}
	return str;
}