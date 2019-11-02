function adjacentElementsProduct(arr) {
  let arrMultiple = [];

  for(let i = 0; i < arr.length - 1; i++) {
    arrMultiple.push(arr[i] * arr[i+1])
  }

  return Math.max(...arrMultiple);
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21