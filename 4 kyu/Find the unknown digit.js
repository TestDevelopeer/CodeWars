function solveExpression(exp) {
    console.log('------------------new------------------');
    console.log(exp);
    let op = '+-*=';
    let arr = []
    //  making 'exp' to an actual conditional expression
    exp = exp.replace('=','==');
    //  '--' is not acceptable on 'eval', so parenthesize them.
    if((idx = exp.indexOf('--')) !== -1){
      let idx2 = exp.indexOf('==');
      let temp = exp.split``;
      temp.splice(idx+1, 0, '(');
      temp.splice(idx2+1, 0, ')');
      exp = temp.join``;
    }
    
    //  replacing '?' to 0 -> 9
    console.log(exp);
    for(let i = 0; i <= 9; i++){
      let temp = exp.replace(/\?/g, i);
      
      //  when it's 0, there're more things to check
      if(i === 0){
        let flag = false;
        for(let j = 0; j < temp.length; j++){
          console.log('inner',j);
          if(temp[j] == 0 && (j-1 < 0 || op.indexOf(temp[j-1]) !== -1) && !(j+1 >= temp.length || op.indexOf(temp[j+1]) !== -1)){
            flag = true;
            break;
          }
        }
        console.log('flag',flag);
        if(flag) continue;
      }
      
      //  check if the new expression is correct.
      console.log(temp);
      if(exp.indexOf(String(i)) === -1 && eval(temp)){
        console.log('answer', i);
        return i;
      }
    }
    
    //  if all failed, nothing is possible.
    return -1;
  }