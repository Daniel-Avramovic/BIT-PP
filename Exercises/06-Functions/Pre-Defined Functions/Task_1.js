//Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
//Input: ["1", "21", undefined, "42", "1e+3", Infinity]
//Output: [1, 21, 42, 1000]

function converts(array) {
  var res = [];
  for (var i = 0; i < array.length; i++) {
    if (isFinite(array[i])) {
      res[res.length] = parseFloat(array[i]);
    }
  }
  return res;
}
console.log(converts(["1", "21", undefined, "42", "1e+3", Infinity]));

//Solution form class:

function convertStringsToNums(array) {
  var transformedArray = [];
  // go though array to stirngs
  for (var i = 0; i < array.length; i++) {
    var currentValue = array[i];
    //check is value is valid number
    var isValid = isFinite(currentValue);
    if (isValid) {
      //if it convert to number
      var number = parseFloat(currentValue);
      //Put it transformed array;
      transformedArray[transformedArray.length] = number;
    }
  }
  return transformedArray;
}
console.log(
  convertStringsToNums(["1", "21", undefined, "42", "1e+3", Infinity])
);
