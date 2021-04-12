"use strict";
//Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message.
//Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
//Output: [2, -2, 33, 78, 12, 5, 8]

var inserts = function (a, p, e) {
  var output = [];
  for (var i = 0; i < a.length; i++) {
    if (i === p) {
      output[output.length] = e;
      output[output.length] = a[i];
    } else {
      output[output.length] = a[i];
    }
  }
  return output;
};
console.log(inserts([2, -2, 33, 12, 5, 8], 3, 78));
