// 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.
var num;
for (num = 1; num < 6; num++) {
  console.log(`[${num},${6 - num}]`);
}
