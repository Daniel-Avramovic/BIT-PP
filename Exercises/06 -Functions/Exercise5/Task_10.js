//Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
//Input:  17    | 15
//Output: true  | false
function checksPrime(a) {
  var output = true;
  for (i = 2; i < a / 2; i++) {
    if (a % i !== 0) {
      output;
    } else {
      output = false;
    }
  }
  return output;
}

console.log(checksPrime(15));
