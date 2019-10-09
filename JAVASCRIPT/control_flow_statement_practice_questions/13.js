// 삼각형 출력하기 - pattern 3
var star;
var line;
var string = '';
for (line = 1; line <= 5; line++) {
  for (star = 1; star <= 6 - line; star++) {
    string += '*';
  }
  string += '\n';
}
console.log(string);
