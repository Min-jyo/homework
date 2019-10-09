// 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
var num;
var sum = 0;
for (num = 1; num < 20; num++) {
  if (!(num % 2) || !(num % 3)) {
    sum += num;
  }
}
console.log(sum);
