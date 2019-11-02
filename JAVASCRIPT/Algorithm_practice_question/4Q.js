function numPY(s) {
  let numP = 0;
  let numY = 0;
  if(s===undefined) return true;
  let str = s.split(''); 
  for(let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'p') numP++;
    if (str[i].toLowerCase() === 'y') numY++;
  }
  
  if((numP===numY) || numP + numY === 0) return true;
  else return false;
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy'));     // false
console.log(numPY('ab'));      // true
console.log(numPY(''));        // true
console.log(numPY());          // true