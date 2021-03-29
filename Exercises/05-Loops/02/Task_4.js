//Write a program that finds the first element larger than minimum and prints out its value.
//Output: 2
var c = [0, 0, 0];
var min1 = Infinity;
var min = Infinity;
var x = [];
for (i = 0; i < c.length; i++) {
  if (min > c[i]) {
    min1 = min;
    min = c[i];
  } else if (min1 > c[i] && c[i] > min) {
    min1 = c[i];
  }
}
if (min1 === Infinity) {
  console.log("All elemets is equal");
} else {
  console.log(min1);
}

//for (var i = 0; i < c.length; i++) {
//  for (var j = 0; j < i; j++) {
//    if (c[i] < c[j]) {
//      var x = c[i];
//      c[i] = c[j];
//      c[j] = x;
//    }
//    console.log(c);
//  }
//  console.log(c);
//}
//console.log(c);

//Solution form class:

var a = [4, 2, 2, -1, 16];
var min = a[0];
var secondMin = a[0];
for (var i = 0; i < a.length; i++) {
  if (a[i] < min) {
    min = a[i];
  }
}

for (var i = 0; i < a.length; i++) {
  if (a[i] > min && a[i] < secondMin) {
    secondMin = a[i];
  }
}

console.log(secondMin);
