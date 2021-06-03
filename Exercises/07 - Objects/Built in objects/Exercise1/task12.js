// Write a function that shuffles the elements of a given array.
// Input: [3, ,6 11, 2, 9, 1]
// Output: [6, 2, 9, 1, 3, 11]  (it can be any random permutation of the given array)
function shuffles(array) {
  for (var i = 0; i < array.length; i++) {
    var j = Math.floor(Math.random() * i);
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

console.log(shuffles([3, 6, 11, 2, 9, 1]));
