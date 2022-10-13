function solution(list) {
	let finalArr = [];
	let j = 0;
	for (let i = 0; i < list.length; i++) {
		if (!finalArr[j]) {
			finalArr[j] = [];
		}
		let diff = list[i + 1] - list[i];
		if (diff === 1 || diff === -1) {
			finalArr[j].push(list[i]);
		} else {
			finalArr[j].push(list[i]);
			j++;
		}
	}
	let str = '';
	for (let i = 0; i < finalArr.length; i++) {
		if (finalArr[i].length > 2) {
			str += finalArr[i][0] + '-' + finalArr[i][finalArr[i].length - 1];
		} else if (finalArr[i].length == 2) {
			str += finalArr[i][0] + ',' + finalArr[i][1];
		} else {
			str += finalArr[i][0];
		}
		str += i < finalArr.length - 1 ? ',' : '';
	}
	return str;
}