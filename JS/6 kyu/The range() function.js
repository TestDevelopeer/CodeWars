function range(start = 0, stop = 0, step = 1) {
	let rangeArr = [];
	if ((start == 0 && stop == 0) || start === stop) return rangeArr;
	if (stop == 0) {
		stop = start;
		start = 0;
	}
	let isStepZero = false;
	if (step == 0) {
		step = 1;
		isStepZero = true;
	}
	for (let i = start; i < stop; i += step) {
		if (isStepZero) {
			rangeArr.push(start);
		} else {
			rangeArr.push(i);
		}
	}
	return rangeArr;
}