'use strict';
//Write a function that reverses a number. The result must be a number.
//12345 -> 54321 // Output must be a number

//function reversDigits(num) {
//  let rev_num = 0;
//  while (num > 0) {
//    rev_num = rev_num * 10 + (num % 10);
//    num = Math.floor(num / 10);
//  }
//  return rev_num;
//}
//console.log(reversDigits(12345));

var num = 123346;
function reverse(a) {
  var reversed = 0;
  a += "";
  for (var i = a.length - 1; i >= 0; i--) {
    reversed += a[i];
  }
  return parseInt(reversed);
}
console.log(reverse(num));
