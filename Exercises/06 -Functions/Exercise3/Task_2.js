'use strict';
//Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
//[NaN, 0, 15, false, -22, '', undefined, 47, null]

function join(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === null) {
      continue;
    } else if (isFinite(array[i])) {
      newArray[newArray.length] = array[i];
    }
  }
  return newArray;
}
console.log(join([NaN, 0, 15, false, -22, "", undefined, 47, null]));
