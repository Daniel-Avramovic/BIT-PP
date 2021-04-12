"use strict";
//Write a function to count the number of letter occurrences in a string.
//"My random string", "n" -> 2

function count(a, b) {
  var counter = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] === b) {
      counter++;
    }
  }
  return counter;
}
console.log(count("My random stringnnn", "n"));
