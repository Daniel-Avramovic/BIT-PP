//Write a function that takes a number and returns array of its digits.

// function numToArray(num) {
//   var num = num + "";
//   var array = [];
//   for (var i = 0; i < num.length; i++) {
//     array[array.length] = parseInt(num[i]);
//   }
//   return array;
// }
// console.log(numToArray(123456));

function numToArray(num) {
  var array = [];
  var finalArray = [];
  for (var i = -1; num >= 1; i--) {
    array[array.length] = num % 10;
    num = parseInt(num / 10);
    parseInt(num);
    //console.log(num);
  }
  for (var i = array.length - 1; i >= 0; i--) {
    finalArray[finalArray.length] = array[i];
  }
  return finalArray;
}
console.log(numToArray(12345));
