function numberOfPrime(n) {
  
  let num = 0;
  let arr = [];

  for (let i = 1; i <= n; i++) {
    for(let j = 1; j <= n; j++) {
      if(i%j == 0) num++;
    }
    if(num === 2) {
      num = 0;
      arr.push(i);
    }else {
      num = 0;
    }
  }

  return arr.length;
}

console.log(numberOfPrime(10)); // 4