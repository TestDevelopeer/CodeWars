var uniqueInOrder=function(iterable){
    console.log(typeof iterable)
    if (typeof iterable !== 'object') {
      iterable = iterable.split('');
    }
    
    let resultArray = [];
    
    for(let i = 0; i <= iterable.length-1; i++) {
      if (iterable[i] !== iterable[i - 1]) {
          resultArray.push(iterable[i]);
        }
    }
    
    return resultArray;
  }
  
  uniqueInOrder([1,2,2,3,3]);