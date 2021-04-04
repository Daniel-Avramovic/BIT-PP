//7.Write a program that calculates a number of digits of a given number.
function calc(num) {
  var sum = 0;
  if (num < 0) {
    num = num * -1;
  }
  while (num >= 1) {
    sum++;
    num /= 10;
  }
  //for (var i = num; i >= 1; i = i / 10) {
  //    sum++;
  //}
  return sum;
}
var result = calc(-150);
console.log(result);
