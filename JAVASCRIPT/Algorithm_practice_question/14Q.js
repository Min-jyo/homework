function findDuplicated(array) {
  let num = 0;
  let NewArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if(array[i] === array[j]) {
        num ++;
      }
    }
    if(num===2) {
      NewArray.push(array[i]);
      num = 0;
    } else {
      num = 0;
    }
  }

  return NewArray;
}

console.log(findDuplicated([1, 2, 3, 4, 1, 2, 3])); // [ 1, 2, 3 ]