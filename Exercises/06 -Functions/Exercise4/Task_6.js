//Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.
//Input array: [2, 4, -2, 7, -2, 4, 2]
//Output: The array is symmetric.
//Input array: [3, 4, 12, 8]
//Output: The array isn’t symmetric.

function symmetric(array) {
  var result = "";
  for (var i = 0, j = array.length - 1; i < array.length, j >= 0; i++, j--) {
    if (array[i] !== array[j]) {
      result = "The array isn’t symmetric.";
      break;
    } else {
      result = "The array is symmetric.";
    }
  }
  return result;
}
console.log(symmetric([2, 4, 4, 2, 5]));
