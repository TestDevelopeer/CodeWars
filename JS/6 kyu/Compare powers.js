function comparePowers(n1, n2) {
	let res1 = Math.pow(n1[0], n1[1]);
	let res2 = Math.pow(n2[0], n2[1]);

	if (res1 == 'Infinity' || res2 == 'Infinity') {
		if ((n1[0] > n2[0] && n1[1] > n2[1]) || (n1[0] < n2[0] && n1[1] > n2[1])) {
			return -1;
		} else if ((n1[0] < n2[0] && n1[1] < n2[1]) || (n1[0] > n2[0] && n1[1] < n2[1])) {
			return 1;
		}
	}

	if (res1 > res2) {
		return -1;
	} else if (res1 == res2) {
		return 0;
	} else {
		return 1;
	}
}