function sumTwoSmallestNumbers(numbers) {  
    numbers = numbers.sort((a,b) => {
      return a - b;
    });
    return numbers[0] + numbers[1];
  }