//Write a program that calculates a number of float values in the array.
//Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
//Output: 2

function float(array) {
  var counter = 0;
  for (var i = 0; i < array.length; i++) {
    var newArr = parseFloat(array[i]);
    if (isFinite(newArr) && newArr !== parseInt(newArr)) {
      counter++;
    }
  }
  return counter;
}
var input = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null];
console.log(float(input));
