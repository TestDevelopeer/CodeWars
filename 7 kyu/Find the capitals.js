var capitals = function (word) {
    word = word.split('');
    let upperIndexs = [];
    word.forEach((elem,index) => {
      if (elem === elem.toUpperCase()) {
        upperIndexs.push(index);
      }
    });
    return upperIndexs;
  };