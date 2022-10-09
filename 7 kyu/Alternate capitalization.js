function capitalize(s){
    let arrString = s.split('');
    let even = [], odd = [];
    arrString.forEach((letter, index) => {
      if (index === 0 || (index % 2) === 0) {
        even.push(letter.toUpperCase());
        odd.push(letter.toLowerCase());
      } else {
        even.push(letter.toLowerCase());
        odd.push(letter.toUpperCase());
      }
    })
    return [even.join(''), odd.join('')];
  };
  
  capitalize("abcdef");