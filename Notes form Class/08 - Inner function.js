// function outter(param) {
//     function inner(theIput){
//         return theIput * 2;
//     }
//     return 'The result is ' + inner(param);
// }
// console.log(outter(2));

// function sumOfEven() {
//     var sum = 0;
//     function isEvan(num){
//         return num % 2 === 0;
//     }
//     function sumOfTwo(num1, num2){
//         return num1 + num2;
//     }
//     for (var i = 0; i <= 100; i++) {
//         // if(i % 2 === 0) {
//         //     sum += i;
//         // }
//         if(isEvan(i)){
//             sum = sumOfTwo(sum, i);
//         }
//     }
//     return sum
// }
// var result = sumOfEven();
// console.log(result);

// function a() {
//     console.log('A!');
//     return function (){
//         console.log('B!');
//     }
// }
// var bigA = a();

// console.log(bigA, typeof bigA);

// function sum(x) {
//     return function (y) {
//         var sum = x + y;
//         return function (z) {
//             return sum + z;
//         }
//     }
// }

// // var result = sum(2)(2)(3);
// // console.log(result);

// var step1 = sum(1)(2)(3);
// console.log(step1, typeof step1);
// var step2 = step1(2);
// console.log(step2, typeof step2);
// var step3 = step2(3);
// console.log(step3,typeof step3);

function calculatorGenerator (){
    function sumOfEvan(){
        var sum = 0;
    
    function isEvan(num){
        return num % 2 === 0;
    }
    function sumOfTwo(num1, num2){
        return num1 + num2;
    }
    for(var i = 0; i <= 100; i++){
        if(isEvan(i)){
            sum = sumOfTwo(sum, i)
        }
    }
    return sum;
}
function sumOfOdd(){
    //....
    return 2500;
}
var sumOfEvanNums = sumOfEvan();
var sumOfOddNums = sumOfOdd();
 function returnFunc() {
    return (sumOfEvanNums - sumOfOddNums) * 12.5;
}
return returnFunc;
}

var calculator = calculatorGenerator();

console.log(calculator())