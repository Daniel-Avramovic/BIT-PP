"use strict";
//Write a program that finds the minimum of a given array and prints out its value and index.
//Input array: [4, 2, 2, -1, 6]
//Output: -1, 3

var findMin = function (a) {
  var min = a[0];
  var index = 0;
  var result;
  for (var i = 0; i < a.length; i++) {
    if (min > a[i]) {
      min = a[i];
      index = i;
    }
  }
  result = "Min is " + min + " and index is " + index;
  return result;
};
console.log(findMin([4, 2, 2, -2, 6]));
