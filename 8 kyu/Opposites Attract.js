function lovefunc(flower1, flower2){
    let resFlow1 = flower1 % 2;
    let resFlow2 = flower2 % 2;
    if (resFlow1 !== resFlow2) {
      return true;
    } else {
      return false;
    }
  }
  
  lovefunc(4, 9);