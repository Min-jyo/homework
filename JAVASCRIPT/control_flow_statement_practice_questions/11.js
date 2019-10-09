// 삼각형 출력하기 - pattern 1
var line;
var star;
var string = '';
for (line = 1; line <= 5; line++) {
  for (star = 1; star <= line; star++) {
    string += '*';
  }
  string += '\n';
}
console.log(string);
