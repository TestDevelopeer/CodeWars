// 456789a123456789b123456789c123456789d123456789e123456789f123456789g123456789h

const log = x => {console.log(x); return x;};

function assemblerInterpreter(program) {
  const code = program
  .split('\n')
  .map(str => str.trim())
  .concat('crash');
  mem = {}; // memory or heap
  const stack = [code.length - 2]; // return stack, with underflow check
  const flag = {e: false, gtr: false}; // equal, greater
  let io = ''; // return message
  
  // find all labels and define them in `mem`
  code.forEach((x, i, xs) => {
    if (/\:$/.test(x)) {
      mem[x.replace(':', '')] = i;
    }
  });
  
  for (let i=0; i<code.length; i++) {
    const [op, key, val] = lineClean(code[i]);
    
    switch (true) {
      
      case (op === 'mov'):
        mem[key] = mem.hasOwnProperty(val) ? mem[val] : Number(val);
        break;
        
      case (op === 'inc'):
        mem[key]++;
        break;
        
      case (op === 'dec'):
        mem[key]--;
        break;
      
      case (op === 'add'):
        mem[key] += mem.hasOwnProperty(val) ? mem[val] : Number(val);
        break;
        
      case (op === 'sub'):
        mem[key] -= mem.hasOwnProperty(val) ? mem[val] : Number(val);
        break;
        
      case (op === 'mul'):
        mem[key] *= mem.hasOwnProperty(val) ? mem[val] : Number(val);
        break;
        
      case (op === 'div'): // Integer division
        mem[key] /= mem.hasOwnProperty(val) ? mem[val] : Number(val);
        mem[key] = Math.floor(mem[key]);
        break;
        
      // case `label` 
      // // see forEach statement above
        
      case (op === 'jmp'):
        i = mem[key];
        break;
        
      case (op === 'cmp'):
        v1 = mem.hasOwnProperty(key) ? mem[key] : Number(key)
        v2 = mem.hasOwnProperty(val) ? mem[val] : Number(val)
        if (v1 === v2) {flag.e = true}
        else {flag.e = false}
        if (v1 > v2) {flag.gtr = true}
        else {flag.gtr = false}
        break;
      
      case (op === 'jne'):
        if (flag.e === false) {
          i = mem[key];
        }
        break;
      
      case (op === 'je'):
        if (flag.e === true) {
          i = mem[key];
        }
        break;
      
      case (op === 'jge'):
        if (flag.gtr === true || flag.e === true) {
          i = mem[key];
        }
        break;
      
      case (op === 'jg'):
        if (flag.gtr === true) {
          i = mem[key];
        }
        break;
      
      case (op === 'jle'):
        if (flag.gtr === false || flag.e === true) {
          i = mem[key];
        }
        break;
      
      case (op === 'jl'):
        if (flag.gtr === false && flag.e === false) {
          i = mem[key];
        }
        break;
        
      case (op === 'call'):
        stack.push(i);
        i = mem[key];
        break;
      
      case (op === 'ret'):
        i = stack.pop();
        break;
        
      case (op === 'msg'):
        io = (
          io
          .split('')
          .concat(
            msgParse(code[i])
            .split('')
          )
          .join('')
        );
        break;
        
      case (op === 'end'):
        return io;
        
      case ';': // Ignore comments
        break;
        
      case (op === 'crash'):
        return -1;
        
      default: // Treat as NOP and go to next line
        break;
    }
  }
  
  function msgParse (msgLine) {
    return (
      msgLine
      .replace(/^msg/, '') // Remove op-code `msg`
      .replace(/\;.*$/, '') // Remove any tail comments
      .match(/('.*?,*')|(\w)/g) // Seperate into text and registers
      .map(s => s.replace(/'/g, '')) // Remove single quotes
      .map(s => s.replace(/,(\w)/, "$1")) // Remove leading commas 
      .map(s => s.replace(/(\w),/, "$1")) // Remove trailing commas
      .map(x => x.split('')) // See next command
      // Take the list-of-lists and convert registers to a single char
      .map(x => (x.length === 1 && /\w/.test(x[0])) ? x[0] : x)
      .map(x =>  // Convert all registers to values
        (Array.isArray(x))
          ? x
          : mem[x]
      )
      .map(x => // Convert char arrays back to strings
        (Array.isArray(x))
          ? x.join('')
          : x
      )
      .join('') // Join into one string and return
    );
  }
  
  function lineClean (line) {
    return (
      line
      .split(' ') // Split into words
      .map(s => s.replace(/\,/, '')) // Remove commas
      .filter(s => (s.split('').length !== 0)) // Remove empty elements
    );
  }
}

program = `
mov   a, 11           ; value1
mov   b, 3            ; value2
call  mod_func
msg   'mod(', a, ', ', b, ') = ', d        ; output
end

; Mod function
mod_func:
    mov   c, a        ; temp1
    div   c, b
    mul   c, b
    mov   d, a        ; temp2
    sub   d, c
    ret
`;

program2 = `
mov   a, 5
mov   b, a
mov   c, a
call  proc_fact
call  print
end

proc_fact:
    dec   b
    mul   c, b
    cmp   b, 1
    jne   proc_fact
    ret

print:
    msg   a, '! = ', c ; output text
    ret
`;

program3 = `
mov   a, 2            ; value1
mov   b, 10           ; value2
mov   c, a            ; temp1
mov   d, b            ; temp2
call  proc_func
call  print
end

proc_func:
    cmp   d, 1
    je    continue
    mul   c, a
    dec   d
    call  proc_func

continue:
    ret

print:
    msg a, '^', b, ' = ', c
    ret
msg a, '^', b, ' = ', c
`;

program4 = `
mov   a, 8            ; value
mov   b, 0            ; next
mov   c, 0            ; counter
mov   d, 0            ; first
mov   e, 1            ; second
call  proc_fib
call  print
end

proc_fib:
    cmp   c, 2
    jl    func_0
    mov   b, d
    add   b, e
    mov   d, e
    mov   e, b
    inc   c
    cmp   c, a
    jle   proc_fib
    ret

func_0:
    mov   b, c
    inc   c
    jmp   proc_fib

print:
    msg   'Term ', a, ' of Fibonacci series is: ', b        ; output text
    ret
`;
assemblerInterpreter(program4);