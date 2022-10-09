function squareDigits(num){
    num = num.toString().split('');
    num.forEach((elem, index) => {
      num[index] = +elem*(+elem);
    });
    return +num.join('');
  }