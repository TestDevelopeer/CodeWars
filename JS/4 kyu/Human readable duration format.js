function formatDuration(seconds) {
	if (seconds == 0) {
		return 'now';
	}
	let s = seconds, m = 0, h = 0, d = 0, y = 0;
	let text = '';
	let t = [];
	if (s > 59) {
		s = s / 60;
		m = Math.trunc(s);
		s = Math.round((s - m).toFixed(2) * 60);
		if (m > 59) {
			m = m / 60;
			h = Math.trunc(m);
			m = Math.round((m - h).toFixed(2) * 60);
			if (h > 23) {
				h = h / 24;
				d = Math.trunc(h);
				h = Math.round((h - d).toFixed(2) * 24);
				if (d > 364) {
					d = d / 365;
					y = Math.trunc(d);
					d = Math.round((Math.trunc((d - y) * 1000) / 1000) * 365);
				}
			}
		}
	}
	if (s > 0) {
		t.push({
			type: 's',
			value: s,
			text: 'second'
		});
	}
	if (m > 0) {
		t.push({
			type: 'm',
			value: m,
			text: 'minute'
		});
	}
	if (h > 0) {
		t.push({
			type: 'h',
			value: h,
			text: 'hour'
		});
	}
	if (d > 0) {
		t.push({
			type: 'd',
			value: d,
			text: 'day'
		});
	}
	if (y > 0) {
		t.push({
			type: 'y',
			value: y,
			text: 'year'
		});
	}

	for (let i in t.reverse()) {
		text += `${t.length > 1 && i == t.length - 1 ? ' and ' : ''}${t[i].value + ' ' + t[i].text}${t[i].value > 1 ? 's' : ''}${i < t.length - 2 ? ', ' : ''}`;
	}

	return text.trim();
}