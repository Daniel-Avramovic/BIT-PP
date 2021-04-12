"use strict";
//Write a program that intertwines two arrays. You can assume the arrays are of the same length.
//Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
//Output array: [4, 3, 5, 8, 6, 11, 2, 9]

function intertwines(array, array2) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr[newArr.length] = array[i];
    newArr[newArr.length] = array2[i];
  }
  return newArr;
}
console.log(intertwines([4, 5, 6, 2], [3, 8, 11, 9]));
