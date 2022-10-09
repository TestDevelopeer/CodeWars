function XO(str) {
    str = str.toLowerCase().split('');
    let x = 0, o = 0;
    str.forEach(elem => {
      if (elem === 'x') {
        x++;
      } else if (elem === 'o') {
        o++;
      }
    })
    if (x == o) {
      return true;
    } else {
      return false;
    }
}

XO("ooxx");
XO("xooxx");