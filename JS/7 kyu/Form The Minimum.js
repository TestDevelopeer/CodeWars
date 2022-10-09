function minValue(values){
    let newArr = new Set(values.sort());
    return +[...newArr].join('');
  }
  
  minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])