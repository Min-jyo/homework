function fibonacci(n) {
  const arr = [0,1];
  for(i = 0; i < n-1; i++) {
    arr.push(arr[i]+arr[i+1]);
  }
  return arr[n];
}

console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8