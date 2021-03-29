//2. Write a program to sum the multiples of 3 and 5 under 1000.
 
var res2 = 0;
for(var x = 0; x < 1000; x++) {
   if(x % 3 === 0 && x % 5 === 0) {
        res2 += x;
    }
}
console.log(res2)
