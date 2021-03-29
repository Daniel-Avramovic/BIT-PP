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