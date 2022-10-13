// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {
	if (buttons.length == 0) return 'Nothing';
	if (buttons.length == 1) return buttons[0];
	if (buttons.length == 2) {
		if (buttons[0] === buttons[1]) {
			return 'Nothing';
		} else {
			return buttons[1];
		}
	}
	if (buttons.length == 3) {
		if (buttons[0] == buttons[1]) {
			return buttons[2];
		} else if (buttons[1] == buttons[2]) {
			return 'Nothing';
		} else {
			return buttons[2];
		}
	}

	for (let i = 0; i < buttons.length; i++) {
		if (buttons[i] == buttons[+i + 1]) {
			buttons.splice(i, 2);
		} else {
			buttons.splice(i, 1)
		}
		i = 0;
	}
	return buttons[0];
}