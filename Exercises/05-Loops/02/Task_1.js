//Write a program that checks if a given element e is in the array a.
//Input:  e = 3, a = [5, -4.2, 3, 7]
//Output: ye
//Input:  e = 3, a = [5, -4.2, 18, 7]
//Output: n
var e = 3;
var a = [5, -4.2, 3, 7];
var res;

for (i = 0; i < a.length; i++) {
  if (a[i] === e) {
    res = "Yes";
    break;
  } else {
    res = "No";
  }
}
console.log(res);
