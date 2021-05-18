//Write a function to find the median element of array.

// function medianElement(array) {
//   var median = 0;
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < array.length; j++) {
//       if (array[j] > array[j + 1]) {
//         var temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   for (var i = 0; i < array.length / 2; i++) {
//     median = array[i];
//   }
//   return median;
// }

// console.log(medianElement([4, 7, 9, 1, 3, 1]));

function medianElement(array) {
  var median = 0;
  if (array.length % 2 !== 0) {
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
          var temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    // console.log(array);
    for (var i = 0; i < array.length / 2; i++) {
      median = array[i];
    }
    return median;
  } else {
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
          var temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    // console.log(array);
    for (
      var i = 0, j = array.length - 1;
      i <= array.length / 2, j >= array.length / 2;
      i++, j--
    ) {
      median = (array[i] + array[j]) / 2;
      // console.log(median, array[i], array[j]);
    }
    return median;
  }
}

console.log(medianElement([4, 7, 9, 3, 3, 1, 9, 11, 67]));
