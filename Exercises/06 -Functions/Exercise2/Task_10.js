"use strict";
//Write a function to get the first n characters and add “...” at the end of newly created string.

function firstN(a, b) {
  var res = "";
  for (var i = 0; i < b; i++) {
    if (i < b) {
      res += a[i];
    }
  }
  res += "...";
  return res;
}
console.log(firstN("DanijelAvramovic", 4));
