function sumDivisor(num) {
  let NewArray = [];
  let sum = 0;
  for(let i = 0; i <= num; i++) {
    if(num % i === 0) NewArray.push(i);
  }

  for(i = 0; i < NewArray.length; i++) {
    sum += NewArray[i];
  }

  return sum;

}

console.log(sumDivisor(12)); // 28