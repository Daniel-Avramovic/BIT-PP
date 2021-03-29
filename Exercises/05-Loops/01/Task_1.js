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