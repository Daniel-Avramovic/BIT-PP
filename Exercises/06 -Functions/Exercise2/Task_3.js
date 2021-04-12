"use strict";
//Write a function that concatenates a given string n times (default is 1).
//"Ha" -> "Ha"
//"Ha", 3 -> "HaHaHa"

function concatenates(a, b) {
  var res = a;
  for (var i = 1; i < b; i++) {
    res += a;
  }
  return res;
}
console.log(concatenates("Ha", 3));
