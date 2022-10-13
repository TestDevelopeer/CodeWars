const RomanNumerals = {
	romansNumbers: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
	romansText: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
	toRoman: function (number) {
		let res = '', i = 0;
		while (i < this.romansNumbers.length) {
			if (number >= this.romansNumbers[i]) {
				res += this.romansText[i];
				number -= this.romansNumbers[i];
			} else {
				i++;
			}
		}
		return res;
	},
	fromRoman: function (text) {
		let res = 0;
		let romanTextArr = text.split('');
		let i = 0;
		while (i < romanTextArr.length) {
			if (romanTextArr[i] === 'I' && romanTextArr[+i + 1] === 'V') {
				res += 4;
				i += 2;
			} else if (romanTextArr[i] === 'I' && romanTextArr[+i + 1] === 'X') {
				res += 9;
				i += 2;
			} else if (romanTextArr[i] === 'X' && romanTextArr[+i + 1] === 'L') {
				res += 40;
				i += 2;
			} else if (romanTextArr[i] === 'X' && romanTextArr[+i + 1] === 'C') {
				res += 90;
				i += 2;
			} else if (romanTextArr[i] === 'C' && romanTextArr[+i + 1] === 'D') {
				res += 400;
				i += 2;
			} else if (romanTextArr[i] === 'C' && romanTextArr[+i + 1] === 'M') {
				res += 900;
				i += 2;
			} else {
				let key = this.romansText.indexOf(romanTextArr[i]);
				res += this.romansNumbers[key];
				i++;
			}
		}
		return res;
	}
}
