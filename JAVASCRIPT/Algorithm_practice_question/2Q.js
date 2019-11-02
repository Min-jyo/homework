function getCount8() {
  let tn = 0;

  for (let i = 1; i <= 10000; i++) {
    let numStr = i += '';
    numStr = numStr.split('');
    for (let j = 0; j < numStr.length; j++) {
      if (numStr[j] === '8') tn++;
    } 
  }
  return tn;
}
  console.log(getCount8()); // 4000