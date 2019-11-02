function getDayName(a, b){
  const day = new Date(2016,a-1,b+1);
  let numday = day.getDay()-1;
  for(let i = 0; i < 7; i++) {
    if(numday===0) return 'SUN';
    if(numday===1) return 'MON';
    if(numday===2) return 'TUE';
    if(numday===3) return 'WED';
    if(numday===4) return 'THR';
    if(numday===5) return 'FRI';
    if(numday===6) return 'SAT';
  }
}

console.log(getDayName(5, 24)); // TUE