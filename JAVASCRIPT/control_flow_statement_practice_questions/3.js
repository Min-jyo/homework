// for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
var string = '';
var num;
for (num = 0; num < 10; num += 2) {
  string += num;
}
console.log(string);
