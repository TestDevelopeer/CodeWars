function sumStrings(a,b) { 
    a = a.split("");
    b = b.split("");
    let result = "";
    let flag = 0;
    while (a.length || b.length || flag) {
      flag += ~~a.pop() + ~~b.pop();
      result = flag % 10 + result;
      flag = flag > 9;
    }
    result = result.replace(/^0+/, '');
    return result;
  }