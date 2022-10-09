function solve(s){
    let lowerIndex = [];
    let upperIndex = [];
    s = s.split('');
    s.forEach((elem,index) => {
      if (elem === elem.toLowerCase()) {
        lowerIndex.push(index);
      } else {
        upperIndex.push(index);
      }
    });
    
    if (lowerIndex.length >= upperIndex.length) {
      upperIndex.forEach(elem => {
        s[elem] = s[elem].toLowerCase();
      });
    } else {
      lowerIndex.forEach(elem => {
        s[elem] = s[elem].toUpperCase();
      })
    }
  
    return s.join('');
}

solve("CODe");