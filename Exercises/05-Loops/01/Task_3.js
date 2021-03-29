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