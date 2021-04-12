'use strict';
//Write a function to convert string into an array. Space in a string should be represented as “null” in new array.
//"My random string" -> ["M", "y", null, "r", "a"]
//"Random" -> ["R", "a", "n", "d", "o", "m"]

function stringInArray(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "string" && array[i] !== " ") {
      newArray[newArray.length] = array[i];
    } else if (array[i] === " ") {
      newArray[newArray.length] = null;
    }
  }
  return newArray;
}
console.log(stringInArray("My random string"));