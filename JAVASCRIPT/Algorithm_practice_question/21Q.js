function adder(x, y){
  const res = [];
  let sum = 0;

  for(let i = x; i <= y; i++) {
    res.push(i);
  }
  for(i = 0; i < res.length; i++) {
    sum += res[i];
  }
  return sum;
}


console.log(adder(3, 5)); // 12