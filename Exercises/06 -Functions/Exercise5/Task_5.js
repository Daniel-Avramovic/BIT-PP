//Sort a previously defined array in a descending order and display it in the console.
//Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
//Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]

function descending(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      var temp;
      if (array[j] < array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(descending([13, 11, 15, 5, 6, 1, 8, 12]));
