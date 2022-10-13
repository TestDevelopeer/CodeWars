function checkOverlapArrays(arr1, arr2) {
	let overlappArr = [...arr1];
	let intervals = [...arr2];
	let otherArr = [];
	for (let i = 0; i < intervals.length; i++) {
		if (overlappArr[1] > intervals[i][0]) {
			if (overlappArr[1] < intervals[i][1]) {
				overlappArr[1] = intervals[i][1];
			}
		} else {
			otherArr.push(overlappArr);
			if (otherArr[otherArr.length - 1][0] != overlappArr[0] && otherArr[otherArr.length - 1][1] != overlappArr[1]) {
				otherArr.push(intervals[i]);
			}
			overlappArr = intervals[i];
		}
	}
	if (otherArr.length > 0) {
		if (!((otherArr[0][0] == intervals[0][0] && otherArr[0][1] == intervals[0][1]) || otherArr.length == intervals.length)) {
			checkOverlapArrays(overlappArr, otherArr);
		}
	}
	return [overlappArr, otherArr];
}

function sumIntervals(intervals) {
	intervals.sort(function (a, b) {
		return a[0] - b[0];
	});
	let overlappArr = [...intervals[0]];
	intervals.splice(0, 1);
	let otherArr = [];
	let sum = 0;
	let res = checkOverlapArrays(overlappArr, intervals);
	overlappArr = res[0];
	otherArr = res[1];
	sum += overlappArr[1] - overlappArr[0];
	for (let i = 0; i < otherArr.length; i++) {
		sum += otherArr[i][1] - otherArr[i][0];
	}
	return sum;
}