"use strict";
//Write a function to check whether the `input` is a string or not.
//"My random string" -> true
//12 -> false

function check(a) {
  var res;
  if (typeof a === "string") {
    res = true;
  } else {
    res = false;
  }
  return res;
}
console.log(check("My random string"));
