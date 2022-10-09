function fakeBin(x){
    let arr = x.split('');
    arr.forEach((num, index) => {
      let intNum = parseInt(num);
      if (intNum < 5) {
        arr[index] = '0';
      } else {
        arr[index] = '1';
      }
    })
    return arr.join('');
  }
  
  fakeBin('45385593107843568');