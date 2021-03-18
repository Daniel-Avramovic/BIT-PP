//1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

var msg1 = ' - even';
var msg2 = ' - odd';
var res;
for(var i = 0; i <= 15; i++) {
    if(i % 2 === 0) {
       res =(i + msg1)
    }else{
        res = (i + msg2);
    }
    console.log(res);
}

console.log('<------------------>');

//2. Write a program to sum the multiples of 3 and 5 under 1000.
 
var res2 = 0;
for(var x = 0; x < 1000; x++) {
   if(x % 3 === 0 && x % 5 === 0) {
        res2 += x;
    }
}
console.log(res2)

console.log('<------------------>');

// 03. Write a program to compute the sum and product of an array of integers.

var array = [1, 2, 3, 4, 5, 6,];
var sum = 0;
var product = 1;

for(j = 0; j < array.length; j++) {
    sum += array[j];
    product *= array[j];
}
console.log(sum);
console.log(product);
console.log('<------------------>');

//4. Write a program which prints the elements of the following array as a single string.
var res3 = '';
var z = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
for(i = 0; i < z.length; i++ ) {
    res3 = z[i]; 
    console.log(res3);
}
console.log('<------------------>');

//5. Write a program that prints the elements of the following array.
var a = [[1, 2, 1, 24], 
        [8, 11, 9, 4], 
        [7, 0, 7, 27]];
var result = '';
  for(var i = 0; i < a.length; i++) {
      var currentElement = a[i];
        for(var j = 0; j < currentElement.length; j++) {
            var currentValue = currentElement[j];
            result = result + currentValue + '\t';
        }
        result = result + '\n';
  }  
  console.log(result);

  console.log('<------------------>');

//6. Write a program that outputs the sum of squares of the first 20 numbers. 
var res4 = 0;
var res3 = 1;
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for(var h = 0; h < num.length; h++){
    res3 = (num[h] * num[h]);
    res4 += res3;
    console.log(res3)
}
console.log(res4)
