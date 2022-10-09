function anagrams(word, words) {
    let sortedWord = word.split('').sort().join('');
    let equalWords = [];
    for (let i = 0; i < words.length; i++) {
      let newWord = words[i].split('').sort().join('');
      if (sortedWord === newWord) {
        equalWords.push(words[i]);
      }
    }
    return equalWords;
  }