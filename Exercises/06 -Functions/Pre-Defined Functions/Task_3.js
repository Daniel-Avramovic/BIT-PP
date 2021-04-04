//Write a program to filter out falsy values from the array.
//Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
//Output: [15, -22, 47]

function filter(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!!array[i] == false) {
      continue;
    } else {
      newArray[newArray.length] = array[i];
    }
  }
  return newArray;
}
console.log(filter([NaN, 0, 15, false, -22, "", undefined, 47, null]));
