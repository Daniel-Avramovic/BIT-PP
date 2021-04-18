//Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
//Input:  192 42 | 81 9
//Output: 6      | 9

function greatestDivisor(a, b) {
  var greatest;
  for (var i = 0; i <= b; i++) {
    if (a % i === 0 && b % i === 0) {
      greatest = i;
    }
  }
  return greatest;
}
console.log(greatestDivisor(192, 42));
