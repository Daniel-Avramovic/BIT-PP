//5.Write a function that returns a function that calculates a decimal value of the given octal number.
//Input: 034
//Output: 28

(function (octal) {
  var decimal;
  decimal = parseInt(octal, 10);
  console.log(decimal);
})(034);
