function isSortedAndHow(array) {
    let arrAsc = [...array].sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
    let arrDesc = [...array].sort((a, b) => {
      if (a < b) {
        return 1;
      }
      if (a > b) {
        return -1;
      }
      return 0;
    });
    
    console.log(arrDesc)
    
    if (arrAsc.join('') === array.join('')) {
      return 'yes, ascending';
    } else if (arrDesc.join('') === array.join('')) {
      return 'yes, descending';
    } else {
      return 'no';
    }
  }
  
  isSortedAndHow([15, 7, 3, -8])