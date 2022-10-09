function longest(s1, s2) {
    let s3 = new Set(s1 + s2);
    return [...s3].sort().join('');
  }
  
  longest("aretheyhere", "yestheyarehere");