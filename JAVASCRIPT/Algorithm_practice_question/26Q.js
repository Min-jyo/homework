function specialSort(array) {
  let minuxArray = [];
  let plusArray = [];

  for(i = 0; i< array.length; i++) {
    if (array[i] < 0) {
      minuxArray.push(array[i]);
    } else {
      plusArray.push(array[i]);
    }
  }

  minuxArray.sort(function(a, b) {return b - a;})
  plusArray.sort(function(a, b) {return a - b;})

  return [...minuxArray,...plusArray];
}

const testArray = [-1, 1, 3, -2, 2, 0];

console.log(testArray); // [ -1, 1, 3, -2, 2, 0 ]
console.log(specialSort(testArray)); // [ -1, -2, 0, 1, 2, 3 ]