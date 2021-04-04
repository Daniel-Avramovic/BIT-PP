//8.Write a program that calculates a number of appearances of a given number in a given array.
//Inputs: (a = [2, 4, 7, 8, 7, 7, 1]), (e = 7);
//Result: 3;
var a = [2, 4, 7, 8, 7, 7, 1];
var e = 7;

function one(a, e) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] === e) {
      sum++;
    }
  }
  return sum;
}
var res = one(a, e);
console.log(res);
