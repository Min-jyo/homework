function toWeirdCase(s) {
  
  let check = 1;
  let str = '';

  for (let index = 0; index < s.length; index++) {
    if(s[index] !== ' '){
      if(check % 2 === 1) {
        str += s[index].toUpperCase();
      } else {
        str += s[index].toLowerCase();
      }
      check++;
    } else {
      check = 1;
      str += ' ';
    }
  }
  return str;
}
console.log(toWeirdCase('hello world')); // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'