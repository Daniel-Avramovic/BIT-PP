//Write a program that calculates a number of integer values in the array.
//Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
//Output: 3

function integer(array) {
  var counter = 0;
  for (var i = 0; i < array.length; i++) {
    var newArr = parseFloat(array[i]);
    //console.log(newArr);
    if (isFinite(newArr) && newArr === parseInt(newArr)) {
      counter++;
    }
  }
  return counter;
}
console.log(integer([NaN, 23.1, 15, false, -22.5, "", 4, 7, null]));
