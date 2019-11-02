function findMinDistance(array){
  
  let differenceArray = [];
  let minimumDistance = 0;
  let groupMinimum = [];

  for(let i = 0; i < array.length-1; i++) {
    differenceArray.push(array[i+1] - array[i])
  }

  MinimumDistance = Math.min(...differenceArray);

  for(i = 0; i < differenceArray.length; i++) {
    if(MinimumDistance === differenceArray[i]) {
      groupMinimum.push(array.slice(i,i+2))
    }
  }

  return groupMinimum;
}

// 1차원 점의 배열
var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]