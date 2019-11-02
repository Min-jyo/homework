function hideNumbers(str) {
  let Rstr = '';

  for(let i = 0; i < str.length; i++)
  {
    if(str[i] === str[str.length-1] || str[i] === str[str.length-2] || str[i] === str[str.length-3] || str[i] === str[str.length-4]) {
      Rstr += str[i]; // 리턴할 문자열에 str[인덱스] 넣어줌
    } else {
      Rstr += '*'; // 리턴할 문자열에 * 넣어줌
    }
  }
  return Rstr;
}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888')); // *****8888