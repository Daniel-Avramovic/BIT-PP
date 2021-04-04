//Write a program that checks if a given number is odd.
function inputNumber(a) {
  if (a % 2 === 0) {
    var num = "Evan!";
  } else {
    var num = "Odd";
  }
  return num;
}
var num = inputNumber(6);
console.log(num);
