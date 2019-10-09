// 삼각형 출력하기 - pattern 4
var line;
var star;
var blank;
var string = '';
for (line = 1; line <= 5; line++) {
  for (blank = 1; blank <= 5 - line; blank++) {
    string += ' ';
  }
  for (star = 1; star <= line; star++) {
    string += '*';
  }
  string += '\n';
}
console.log(string);
