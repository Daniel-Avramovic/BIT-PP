//Write a program that deletes a given element e from the array a.
//Input: e = 2, a = [4, 6, 2, 8, 2, 2]
//Output array: [4, 6, 8]
var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var res = [];
for (i = 0; i < a.length; i++) {
  if (a[i] != e) {
    res[i] = a[i];
  } else {
    a.splice(i, 1);
    i--;
    console.log(a);
  }
}
console.log(res);

var newArray = [];
for (var i = 0; i < a.length; i++) {
  if (a[i] !== e) {
    newArray[newArray.length] = a[i];
  }
}
console.log(newArray);
//for (i = 0; i < a.length; i++) {
//  if (a[i] !== e) {
//    res[res.length] = a[i];
//    console.log(res.length, i, res, a[i]);
//  }
//}
//console.log(res);
