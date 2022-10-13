snail = function (array) {
	let i;
	let snake = [];
	let allNumbersCnt = array.length * array[0].length;
	while (snake.length < allNumbersCnt) {
		snake.push(...array.shift());
		for (i = 0; i < array.length; i++) {
			snake.push(array[i].pop());
		}
		snake.push(...(array.pop() || []).reverse())
		for (i = array.length - 1; i >= 0; i--) {
			snake.push(array[i].shift())
		}
	}

	return snake;
}
snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])