function getArray(arr) {
  return arr.filter(item => {
    return (item > 3) && !(item%2)
  });
}

console.log(getArray([1, 2, 3, 4, 5, 6])); // [ 4, 6 ]