"use strict";
//1.Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).
//"My random string", "JS " -> "JS My random string"
//"My random string", "JS ", 10 -> "My random JS string"

function insert(a, b, c) {
  var res = "";
  for (var i = 0; i < a.length; i++) {
    if (c === undefined) {
      res = b + a;
    }
    if (i === c) {
      res += b;
      res += a[i];
    } else {
      res += a[i];
    }
  }
  return res;
}
console.log(insert("My random string", "JS ", 10));
