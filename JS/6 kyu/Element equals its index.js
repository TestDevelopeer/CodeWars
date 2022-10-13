function indexEqualsValue(a) {
	/*let i = 0;
	for(; i < a.length; i++) {
	  if (i == a[i]) {
		return i;
	  }
	}*/
	let curr = -1;
	let checkValue = (start, end) => {
		if (start > end) {
			return curr;
		}
		let centerArr = Math.floor(start - ((start - end) / 2));
		if (a[centerArr] == centerArr) {
			curr = centerArr;
			return checkValue(start, centerArr - 1);
		} else if (a[centerArr] > centerArr) {
			return checkValue(start, centerArr - 1);
		} else {
			return checkValue(centerArr + 1, end);
		}
	}
	return checkValue(0, a.length - 1);
}