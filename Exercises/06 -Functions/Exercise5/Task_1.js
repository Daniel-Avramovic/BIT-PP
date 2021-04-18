//Find the min and max element in the following array and switch their places. Print out the modified array in the console.
//Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
//Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
function findMinAndMax(array) {
  var min = array[0];
  var minIndex = 0;
  var max = array[0];
  var maxIndex = 0;
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
      minIndex = i;
    }
    if (max < array[i]) {
      max = array[i];
      maxIndex = i;
    }
  }
  for (var i = 0; i < array.length; i++) {
    if (i === maxIndex) {
      newArr[newArr.length] = min;
    } else if (i === minIndex) {
      newArr[newArr.length] = max;
    } else {
      newArr[newArr.length] = array[i];
    }
  }
  return newArr;
}

console.log(findMinAndMax([0, 500, 12, 149, 53, 1, 400, 19]));
