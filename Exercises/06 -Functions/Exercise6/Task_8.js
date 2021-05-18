//Write a function to find the maximum and minimum elements. Function returns an array.

function maxAndMin(array) {
  var min = Infinity;
  var max = -Infinity;
  var newArray = [];
  for (var i = 0, j = array.length - 1; i < array.length, j >= 0; i++, j--) {
    if (min > array[i]) {
      min = array[i];
    }
    if (max < array[j]) {
      max = array[j];
    }
  }
  newArray[newArray.length] = max;
  newArray[newArray.length] = min;
  return newArray;
}
console.log(maxAndMin([2, 6, 7, 10, 1, 3, 2]));
