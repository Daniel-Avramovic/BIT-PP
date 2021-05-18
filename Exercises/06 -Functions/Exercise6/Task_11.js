//Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.

function toFind(array) {
  var returnArray = [];
  if (array.length % 2 === 0) {
    returnArray[returnArray.length] = array[0];
    returnArray[returnArray.length] = array[array.length - 1];
    array = returnArray;
  } else if (array.length % 2 !== 0) {
    returnArray[returnArray.length] = array[0];
    for (var i = 0; i < array.length / 2; i++) {
      var tempElement = array[i];
    }
    returnArray[returnArray.length] = tempElement;
    returnArray[returnArray.length] = array[array.length - 1];
    array = returnArray;
  } else {
    array = returnArray;
  }
  return array;
}

console.log(toFind([2, 3, 4, 5, 6, 7, 9]));
