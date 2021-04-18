//(skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
//Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
//[ 13, 11, 15, 5, 6, 1, 8, 12 ]
//Output: [ 2, 10, 12, 16, 22, 24, 26, 30
function sort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i] * 2;
  }
  return array;
}

console.log(sort([13, 11, 15, 5, 6, 1, 8, 12]));
