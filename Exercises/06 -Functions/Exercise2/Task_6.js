"use strict";
//Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.

function lastChar(a, b) {
  var result = -1;
  for (var i = a.length - 1; i >= 0; i--) {
    //console.log(i);
    if (a[i] === b) {
      result = i + 1;
      break;
    }
  }
  return result;
}
console.log(lastChar("Danijel Avramovic", "v"));
