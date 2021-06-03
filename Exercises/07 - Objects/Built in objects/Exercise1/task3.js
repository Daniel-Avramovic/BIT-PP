//a. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

//b. Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

//a.
// (function(){
//   var array = [1, 2, 9, 2, 1];
//   function checkIsOdd(arr){
//     if(arr.length % 2 !== 0){
//       return true;
//     }else{
//       return false;
//     }
//   }
//   console.log(checkIsOdd(array));
// })()

(function(){
  var array = [1,2,9,2,1];
  console.log(array.some(item => !(item % 2)))
  return array.some(item => !(item % 2))
})();

//b.
(function () {
  var array = [-1, 8.1, 3, 6, 2.3, 44, 2.11];
  var counter = 0;
  function countMiddle(arr) {
    if (arr.length % 2 === 0) {
      return "Error";
    } else {
      var middle = 0;
      for (var i = 0; i < arr.length / 2; i++) {
        middle = arr[i];
      }
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < middle) {
          counter++;
        }
      }
      return counter;
    }
  }
  console.log(countMiddle(array));
})();
