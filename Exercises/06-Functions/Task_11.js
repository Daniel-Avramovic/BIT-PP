//11. Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc.
function concatenates(a, b) {
  var res = "";
  for (var i = 1; i <= b; i++) {
    if (typeof a === "string") {
      res += a;
    }
  }
  for (var i = 1; i <= a; i++) {
    if (typeof b === "string") {
      res += b;
    }
  }
  return res;
}

//function concatenates(a, b) {
//  var res = "";
//  var i = 1;
//  while (i <= b) {
//    if (typeof a === "string") {
//      res += a;
//    }
//    i++;
//  }
//  while (i <= a) {
//    if (typeof b === "string") {
//      res += b;
//    }
//    i++;
//  }
//  return res;
//}
var num = concatenates(4, "abc");
console.log(num);
