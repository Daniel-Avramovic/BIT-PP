//Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
//Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
//Output: “015false-2247”

function join(array) {
  var output = "";
  for (var i = 0; i < array.length; i++) {
    if (array[i] === null) {
      continue;
    }
    var elements = isFinite(array[i]);
    if (elements) {
      output = output + array[i];
    }
  }
  return output;
}
console.log(join([NaN, 0, 15, false, -22, "", undefined, 47, null]));
