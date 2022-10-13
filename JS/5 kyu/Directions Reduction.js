function dirReduc(arr) {
	let newArr = {
		'NORTH': 'SOUTH',
		'SOUTH': 'NORTH',
		'EAST': 'WEST',
		'WEST': 'EAST',
	}

	let successArr = (arr) => {
		arr.filter((item, index) => {
			if (newArr[arr[index]] == arr[index + 1]) {
				arr.splice(index, 2);
				successArr(arr);
			}
		});
	}
	successArr(arr);
	return arr;
}