// 삼각형 출력하기 - pattern 2
var line;
var star;
var string = '';
var blank;

for (line = 1; line <= 5; line++) {
  for (blank = 1; blank <= line - 1; blank++) {
    string += ' ';
  }
  for (star = 1; star <= 6 - line; star++) {
    string += '*';
  }
  string += '\n';
}
console.log(string);
