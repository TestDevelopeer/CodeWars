const number = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
const numberTen = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

function number2words(n) {
	if (n < 20) return number[n];
	let nPercentTen = n % 10;
	let nPercentHundred = n % 100;
	let nPercentThousand = n % 1000;
	if (n < 100) return numberTen[~~(n / 10) - 2] + (nPercentTen ? "-" + number[nPercentTen] : "");
	if (n < 1000) return number[~~(n / 100)] + " hundred" + (nPercentHundred == 0 ? "" : " " + number2words(nPercentHundred));
	return number2words(~~(n / 1000)) + " thousand" + (nPercentThousand != 0 ? " " + number2words(nPercentThousand) : "");
}