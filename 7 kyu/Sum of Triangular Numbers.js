function sumTriangularNumbers(n) {
    let startNum = 0;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      startNum += i;
      sum += startNum;
    }
    return sum;
  }