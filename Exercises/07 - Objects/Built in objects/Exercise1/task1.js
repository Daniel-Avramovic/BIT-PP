// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]
(function () {
  var array = [2, 4, 7, 11, -2, 1];
  var newArray = [];
  // return [...array, ...array];
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    newArray.push(element);
    newArray.push(element);
  }
  console.log(newArray);
  return newArray;
})();
