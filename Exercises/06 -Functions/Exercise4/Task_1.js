"use strict";
//Write a program that checks if a given element e is in the array a.
//Input:  e = 3, a = [5, -4.2, 3, 7]
//Output: yes
//Input:  e = 3, a = [5, -4.2, 18, 7]
//Output: no

var checks = function (a, b) {
  var res = "";
  for (var i = 0; i < a.length; i++) {
    if (a[i] === b) {
      res = "Yes";
      break;
    } else {
      res = "No";
    }
  }
  return res;
};
console.log(checks([5, -4.2, 3, 7], 3));
