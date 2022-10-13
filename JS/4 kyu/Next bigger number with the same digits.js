function nextBigger(n) {
	let nArr = `${n}`.split('');
	let middle = -1, middleKey;

	for (let i = nArr.length - 1; i >= 0; i--) {
		if (nArr[i] > nArr[i - 1]) {
			middle = nArr[i - 1];
			middleKey = i - 1;
			break;
		}
	}
	if (middle === -1) {
		return middle;
	}
	let leftSide = [...nArr].splice(0, middleKey);
	let rightSide = [...nArr].splice(middleKey + 1);
	for (let i = rightSide.length - 1; i >= 0; i--) {
		if (+rightSide[i] > +middle) {
			rightSide.push(middle);
			middle = rightSide[i];
			rightSide.splice(i, 1);
			break;
		}
	}
	return parseInt(leftSide.join('') + middle + rightSide.sort((a, b) => a - b).join(''));
}