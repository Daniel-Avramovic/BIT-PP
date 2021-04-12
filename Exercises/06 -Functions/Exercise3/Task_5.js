'use strict';
//Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
//[7, 9, 0, -2] -> -2
//[7, 9, 0, -2], 2 -> [0, -2]

function last(a, n) {
  var newArr = [];
  if (n === undefined) {
    newArr = a[a.length - 1];
  }
  for (var i = n; i < a.length; i++) {
    newArr[newArr.length] = a[i];
  }
  return newArr;
}
console.log(last([7, 9, 0, -2], 2));