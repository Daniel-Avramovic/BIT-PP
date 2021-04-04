//9.Write a program that calculates the sum of odd elements of a given array.
function sumOfOdd() {
  var sum = 0;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] % 2 !== 0) {
      sum += arguments[i];
    }
    res2 = sum;
  }
  return res2;
}
var res2 = sumOfOdd(2, 3, 7, 2);

console.log(res2);
