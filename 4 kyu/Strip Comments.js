function solution(input, markers) {
    let str = input.split('\n');
    let strSplitted = [];
    for (let i = 0; i < str.length; i++) {
      let isSplitted = false;
      let spliitted;
      for (let j = 0; j < markers.length; j++) {
        spliitted = str[i].split(markers[j]);
        if (spliitted.length > 1) {
          isSplitted = true;
          strSplitted.push(spliitted[0].trim());
        }
      }
      if (!isSplitted) {
        strSplitted.push(str[i].trim());
      }
    }
    return strSplitted.join('\n');
  };