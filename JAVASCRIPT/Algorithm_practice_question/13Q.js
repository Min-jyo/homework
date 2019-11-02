function isNotOverlapArray(array) {
  let num = 0;
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if(j+1 === array[i]) num ++;
    }
  }
  return array.length === num ? true : false;
}
console.log(isNotOverlapArray([4, 1, 3, 2])); // true
console.log(isNotOverlapArray([4, 1, 3]));    // false