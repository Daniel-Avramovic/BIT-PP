"use strict";
//Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
//1 -> 1st
//11 -> 11th

function humanize(n) {
  var res = "";
  if (n % 100 >= 11 && n % 100 <= 13) {
    res = n + "th";
  } else if (n % 10 === 1) {
    res = n + "st";
  } else if (n % 10 === 2) {
    res = n + "nd";
  } else if (n % 10 === 3) {
    res = n + "rd";
  } else {
    res = n + "th";
  }
  return res;
}

console.log(humanize(25));
