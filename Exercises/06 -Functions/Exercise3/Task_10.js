"use strict";
//Write a program to find the most frequent item of an array.
//[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

function mostFreq(a) {
  var char = "";
  var counter = 0;
  for (var i = 0; i < a.length; i++) {
    var temp = a[i];
    var tempCount = 0;
    for (var j = 0; j < a.length; j++) {
      if (temp === a[j]) {
        tempCount++;
      }
    }
    if (counter < tempCount) {
      counter = tempCount;
      char = temp;
    }
  }
  return char + " " + counter;
}
console.log(mostFreq([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));
