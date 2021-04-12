'use strict';
//Write a function that accepts a number as a parameter and checks if the number is prime or not.
//Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function prime(a) {
  var res = "";
  for (var i = 2; i < a / 2; i++) {
    if (a % i === 0) {
      res = "Is not";
      break;
    } else {
      res = "Prime";
    }
  }
  return res;
}
console.log(prime(1802));
