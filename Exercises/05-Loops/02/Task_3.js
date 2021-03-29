//Write a program that finds the minimum of a given array and prints out its value and index.
//Input array: [4, 2, 2, -1, 6]
//Output: -1, 3
var b = [4, 2, 2, -1, 6];
var min = 0;
var index;
var res;
for (i = 0; i < b.length; i++) {
  if (min >= b[i]) {
    min = b[i];
    index = i;
  } else {
    min = min;
  }
  res = min + ", " + index;
}
console.log(res);
