// Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }

(function () {
  var array = [1, 4, -2, 11, 8, 1, -2, 3];

  function smallestElement(arr) {
    var smallEl = arr[0];

    for (var i = 0; i < arr.length; i++) {
      var element = arr[i];
      if (smallEl > element) {
        smallEl = element;
      }
    }
    var output = {
      minValue: smallEl,
      minLastIndex: array.lastIndexOf(smallEl),
    };
    return output;
  }
  console.log(smallestElement(array));
})();
