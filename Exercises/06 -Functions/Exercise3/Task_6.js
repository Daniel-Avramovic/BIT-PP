"use strict";
//Write a function to create a specified number of elements with pre-filled numeric value array.
//6, 0 -> [0, 0, 0, 0, 0, 0]
//2, "none" -> ["none", "none"]
//2 -> [null, null]

function creates(a, b) {
  var newArr = [];
  for (var i = 0; i < a; i++) {
    if (b === undefined) {
      newArr[newArr.length] = null;
    } else {
      newArr[newArr.length] = b;
    }
  }
  return newArr;
}
console.log(creates(6, 0));
