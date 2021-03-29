//Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.
//Input array: [2, 4, -2, 7, -2, 4, 2]
//Output: The array is symmetric.
//Input array: [3, 4, 12, 8]
//Output: The array isn’t symmetric.
var res = " The array is symmetric.";
var array = [2, 4, -2, 7, -2, 4, 2];

for (var i = 0, j = array.length - 1; i < array.length; i++, j--) {
  if (array[i] !== array[j]) {
    res = "The array isn’t symmetric.";
    break;
  } else {
    res = res;
  }
}
console.log(res);

//Solution form class
var a = [2, 4, -2, 7, -2, 4, 2];
var result = true;
for (var i = 0, j = array.length - 1; i < array.length; i++, j--){
  if(a[i] !== a[j]) { 
    result = false;
    break;

  }
}
if(result){
  console.log('The array is symetric.' )
  }else{
    console.log('The array is not symetric.')
  }
