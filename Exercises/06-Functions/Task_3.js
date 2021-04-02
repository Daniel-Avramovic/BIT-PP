//3.Write a program that checks if a given number is a three digit long number.
function digitNumber(a) {
  if (a >= 100 && a < 1000) {
    var result = "Three digit";
  } else if (a >= 10 && a < 100) {
    var result = "Two digits";
  } else if (a < 10 && a >= 0) {
    var result = "One digit";
  } else if (a >= 1000) {
    var result = "Four and more";
  } else {
    var result = "Negative number";
  }
  return result;
}
var result = digitNumber(2);
console.log(result);
