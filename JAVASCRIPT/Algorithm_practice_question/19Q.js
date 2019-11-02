function isHarshad(n){
  numStr = n + '';
  numStrArray = numStr.split('');
  sum = 0;

  for(i = 0; i < numStrArray.length; i++) {
    sum += +numStrArray[i];
  }

  if(!(n%sum)) return true;
  else return false;

 
}

console.log(isHarshad(10)); // true
console.log(isHarshad(12)); // true
console.log(isHarshad(18)); // true
console.log(isHarshad(11)); // false
console.log(isHarshad(13)); // false