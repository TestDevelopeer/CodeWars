function squareSum(numbers){
    let sum = 0; 
    numbers.forEach(num => {
      sum += Math.pow(num, 2);
    });
    console.log(sum)
    return sum;
  }
  
  squareSum([1, 2, 2]);