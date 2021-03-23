//Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is,print the result, if not, show “X”.
//Sample input: 10  					Sample input: 7
//Output: 10 / 2 = 5					Output: X  

var inputNumber = 10;
if(typeof inputNumber === "number") {
    if((inputNumber % 2) === 0){
        console.log(inputNumber / 2)
    } else{
        console.log("x")
    }
} else {
    console.log('Input is not a number');
}