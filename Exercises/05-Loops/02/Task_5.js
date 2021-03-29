//Write a program that calculates the sum of positive elements in the array.
//Input array: [3, 11, -5, -3, 2]
//Output: 16
var res = 0;
var num = [3, 11, -5, -3, 2];
for (i = 0; i < num.length; i++) {
  if (num[i] > 0) {
    res += num[i];
  }
}
console.log(res);
