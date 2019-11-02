function digitSum(n) {
  if(n > 100000000) return false;
  numStr = n + '';
  numStrArray = numStr.split('');
  sum = 0;

  for(i = 0; i < numStrArray.length; i++) {
    sum += +numStrArray[i];
  }

  return sum;
}

console.log(digitSum(123));  // 6
console.log(digitSum(987));  // 24
console.log(digitSum(100000001));  // false