function pigIt(str){
    let splittedStr = str.split(' ');
    splittedStr.forEach((elem, index) => {
      let firstLetter = elem[0];
      if (/[a-zа-яё]/i.test(firstLetter)){
        splittedStr[index] = splittedStr[index].slice(1) + `${firstLetter}ay`;
      }
    })
    return splittedStr.join(' ');
  }