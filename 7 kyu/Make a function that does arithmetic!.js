function arithmetic(a, b, operator){
    let sum = 0;
    switch(operator) {
        case 'add':
          sum = a + b;
        break;
        case 'subtract':
          sum = a - b;
        break;
        case 'multiply':
          sum = a * b;
        break;
        case 'divide':
          sum = a / b;
        break;
        default:
          return operator;
    }
    return sum;
  }
  
  arithmetic(1, 2, "add");