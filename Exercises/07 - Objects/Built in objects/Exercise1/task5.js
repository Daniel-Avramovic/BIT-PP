// a.
//Write a function that finds all the elements in a given array less than a given element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]
// b.
//Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive.
//   Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]
//c.
// Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it.
//a:
(function () {
  var array = [2, 3, 8, -2, 11, 4];
  var newArr = [];
  function findElement(arr, num) {
    for (var i = 0; i < arr.length; i++) {
      var element = arr[i];
      if (element < num) {
        newArr.push(element);
      }
    }
    return newArr;
  }
  console.log(findElement(array, 6));
})();
//b:
(function () {
  var input = ["JavaScript", "Programming", "fun", "product", 'projekat', 'nesto'];
  var startWith = "pro";
  var newArr = [];

  function findWord(arr, start) {
    for (var i = 0; i < arr.length; i++) {
      var element = arr[i];
      if (element.toLowerCase().indexOf(start) === 0) {
        newArr.push(element);
      }
    }
    return newArr;
  }
  console.log(findWord(input, startWith));
})();
// var a= [2, 3, 8, -2, 11, 4];
// var el= 6;
// newArr=[];
// //Output: [2, 3, -2, 4]
// function lessThenEl(){
//   for(var i=0;i<a.length;i++){
//     if(a[i]<el){
//       newArr.push(a[i]);
//     }
//   }return newArr;
// }console.log(lessThenEl());

// function finds(a){
//     var b=[];
//     for(var i=0;i<a.length;i++){

//      if(a[i].toLowerCase().indexOf("pro")!==-1){
//           b.push(a[i]);

//     }
//     } return b ;
//   } console.log(finds(["JavaScript", "Programming", "fun", "product"] ));
