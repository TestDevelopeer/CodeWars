function rot13(message){
    let alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let result = '';
    console.log(message);
    for (let i = 0; i < message.length; i++) {
      if (/[a-zа]/i.test(message[i])){
        alph.forEach((elem,index) => {
          let lowerMessage = message[i].toLowerCase();
          if (lowerMessage === elem) {
            let shiftedIndex = index + 13;
            let shift = shiftedIndex < alph.length ? shiftedIndex : shiftedIndex - alph.length;
            result += lowerMessage === message[i] ? alph[shift] : alph[shift].toUpperCase();
          }
        });
      } else {
        result += message[i];
      }
    }
  
    return result;
  }