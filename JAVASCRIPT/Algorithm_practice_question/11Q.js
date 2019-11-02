function checkPalindrom(str) {
  str = str.split('');
  str1 = str.slice();
  str1.reverse();
  console.log(str, str1);
  
  for(i = 0; i < str.length ; i++) {
   if(str[i] !== str1[i]) return false;
  }
  return true;
}

console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // true