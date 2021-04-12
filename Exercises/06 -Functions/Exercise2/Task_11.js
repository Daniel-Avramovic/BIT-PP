"use strict";
//Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
//["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

function arrayOfNumbers(array) {
  var new1 = [];
  for (var i = 0; i < array.length; i++) {
    if (isFinite(array[i])) {
      new1[new1.length] = parseFloat(array[i]);
    }
  }
  return new1;
}
console.log(arrayOfNumbers(["1", "21", undefined, "42", "1e+3", Infinity]));
