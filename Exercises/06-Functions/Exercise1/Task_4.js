//4.Write a program that calculates an arithmetic mean of four numbers.
//function arithmeticMean(a, b, c, d, e) {
//  var sum = (a + b + c + d) / e;
//  return sum;
//}
//var sum = arithmeticMean(5, 5, 5, 8, 4);
//console.log(sum);

function arithmeticMean() {
  var sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  var res1 = sum / arguments.length;
  return res1;
}
var res1 = arithmeticMean(5, 8, 7, 5);
console.log(res1);
