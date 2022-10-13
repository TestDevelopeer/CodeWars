function getTheVowels(word) {
	console.log(word);
	let vowels = ['a', 'e', 'i', 'o', 'u'];
	let i = 0;
	let currentVowel = vowels[i];
	let vowelArr = word.split('').filter((letter, index) => {
		if (letter == currentVowel) {
			i++;
			if (i > vowels.length - 1) {
				i = 0;
			}
			currentVowel = vowels[i];
			return true;
		}
	});
	return vowelArr.length;
}