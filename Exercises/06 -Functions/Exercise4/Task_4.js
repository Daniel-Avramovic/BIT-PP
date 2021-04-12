"use strict";
//Write a program that finds the second smallest number and prints out its value.
//Input array: [4, 2, 2, -1, 6]
//Output: 2

var secondSmall = function (a) {
  var min = Infinity;
  var sMin = Infinity;
  for (var i = 0; i < a.length; i++) {
    if (min > a[i]) {
      sMin = min;
      min = a[i];
    } else if (sMin > a[i] && a[i] > min) {
      sMin = a[i];
    }
  }
  if (sMin === Infinity) {
    sMin = "All elemnts is equal";
  } else {
    sMin;
  }
  return sMin;
};
console.log(secondSmall([0, 0, 0, -1]));
