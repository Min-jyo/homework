function waterMelon(n) {
  let Rstr = '';

  for(i = 0; i < n; i++)
  {
    Rstr += i % 2 !== 1 ? '수' : '박';
  }

  return Rstr;
}

console.log('n이 3인 경우: '+ waterMelon(3));
console.log('n이 4인 경우: '+ waterMelon(4));