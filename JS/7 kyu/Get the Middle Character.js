function getMiddle(s)
{
  const cnt = s.length;
  const arr = s.split('');
  if (cnt % 2 == 0) {
    let dec = cnt / 2 - 1;
    return `${arr[dec]}${arr[dec+1]}`;
  } else {
    let dec = Math.ceil(cnt / 2) - 1;
    return `${arr[dec]}`;
  }
}

getMiddle('test');
getMiddle('testing');