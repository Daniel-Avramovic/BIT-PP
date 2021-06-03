// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]
//1,4,8,8, 9, 12, 13, 13

(function () {
  var array = [8, 13, 8, 9, 12, 8, 8, 8, 1, 1, 1, 1, 4, 13];
  array.sort(function (a, b) {
    return a - b;
  });
  for (var i = array.length - 1; i >= 0; i--) {
    var element = array[i];
    var element1 = array[i + 1];
    if (element === element1) {
      array.splice(i, 1);
    }
  }
  console.log(array);
})();
