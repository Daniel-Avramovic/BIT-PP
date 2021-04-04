//1.Write a program that calculates the maximum of two given numbers.
function maxNumber(a, b) {
  if (a > b) {
    var res = a;
  } else if (a < b) {
    var res = b;
  } else {
    var res = "Number are equal";
  }
  return res;
}
var res = maxNumber(7, 6);
console.log(res);
