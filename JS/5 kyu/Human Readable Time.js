const prepareDate = (date) => {
	let res = date < 10 ? '0' + date : date;
	return res;
}

function humanReadable(seconds) {
	let s = seconds, m = 0, h = 0;

	if (s > 59) {
		s = s / 60;
		m = Math.trunc(s);
		s = Math.round((s - m).toFixed(2) * 60);
		if (m > 59) {
			m = m / 60;
			h = Math.trunc(m);
			m = Math.round((m - h).toFixed(2) * 60);
		}
	}
	s = prepareDate(s);
	m = prepareDate(m);
	h = prepareDate(h);

	return h + ':' + m + ':' + s;
}

humanReadable(3599);