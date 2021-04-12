"use strict";
//Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.
//"My random string", "_" -> "My_random_string"
//"My random string", "+" -> "My+random+string"
//"My random string" -> "My-random-string"

function spaceInString(a, b) {
  var res = "";
  for (var i = 0; i < a.length; i++) {
    if (b === undefined) {
      res = "My-random-string";
    } else if (a[i] === " ") {
      res += b;
    } else {
      res += a[i];
    }
  }
  return res;
}
console.log(spaceInString("My random string", "+"));
