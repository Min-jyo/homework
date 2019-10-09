// 역정삼각형 출력하기
var line;
var star;
var blank;
var string = '';

for (line = 1; line <= 5; line++) {
  for (blank = 1; blank <= line - 1; blank++) {
    string += ' ';
  }
  for (star = 1; star <= 2 * (6 - line) - 1; star++) {
    string += '*';
  }
  string += '\n';
}
console.log(string);
