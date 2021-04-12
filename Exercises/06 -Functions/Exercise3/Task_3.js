//Write a program to filter out falsy values from the array.
//[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]

function filter(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!!arr[i] == false) {
      continue;
    } else {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
}
console.log(filter([NaN, 0, 15, false, -22, "", undefined, 47, null]));
