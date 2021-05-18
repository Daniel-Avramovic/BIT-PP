//Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

function maxElement(array) {
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    if (
      array[i] === null ||
      array[i] === undefined ||
      array[i] === true ||
      array[i] === false ||
      array[i] === NaN
    ) {
      continue;
    }
    console.log(typeof array[i]);
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}
console.log(maxElement([2, null, undefined, 5, 7, false, 8, true, 2]));
