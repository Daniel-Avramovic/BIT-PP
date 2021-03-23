//8. Write a program that takes as input two numbers and a string denoting the operation (“+”, “-”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!

var x = 4;
var y = 0;
var operations = '+';
var resOperations;
switch (operations) {
    case '+':
       resOperations = (x + y);
       break;
   case '-':
       resOperations = (x - y);
       break;
   case '*':
       resOperations = (x * y);
       break;
   case '/':
       if (y !==0) {
           resOperations = (x / y);
       } else {
           resOperations = ('Can not devide by 0')
       }
       break;
   default:
       resOperations = ('Input a number')
       break;
}
console.log(resOperations);
