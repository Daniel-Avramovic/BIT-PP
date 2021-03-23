//Task 1. Write a conditional statement to find the sign of product of three numbers. Display the result in the console 
//with the specified sign.
//Sample numbers: 3, -7, 2 
//Output: The sign is - 
var output = "The sing is ";
a = 3,
b = -7;
x = 2;
/*if(a * b * x <=0){
    output += a * b *x
} else{
    output = 'The sing is in +';
}*/
var prod = a * b * x;
if(prod<0) {
    output += prod;
} else {
    output = 'The sing in +';
}

console.log(output)