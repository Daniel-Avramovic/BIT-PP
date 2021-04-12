'use strict';
//Write a function to check whether a string is blank or not.
//"My random string" -> false
//" " -> true
//12 -> false
//false -> false

function blank(a) {
  var res = "";
  if (a === " ") {
    res = true;
  } else {
    res = false;
  }
  return res;
}
console.log(blank(" "));