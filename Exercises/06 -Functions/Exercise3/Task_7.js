"use  strict";
//Write a function that says whether a number is perfect.
//28 -> 28 is a perfect number.

function perfectNumber(n) {
  for (var i = 1; i <= n / 2; i++) {
    var sum = 0;
    var res;
    if (n % i === 0) {
      sum = sum + i;
    }
  }
  if (n / 2 === sum) {
    res = n + " is perfect number";
  } else {
    res = n + " is not perfect number";
  }
  return res;
}
console.log(perfectNumber(495));
