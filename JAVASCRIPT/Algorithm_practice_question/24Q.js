function average(array){
  return array.reduce((pre,cur,index,self) => {
    return index === self.length - 1 ? (pre + cur) / self.length : pre + cur;
  }, 0);
}

console.log(average([5, 3, 4])); // 4