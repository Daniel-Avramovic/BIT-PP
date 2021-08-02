// Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

// 	12345 -> 54321

(function(){
    function reverseNumber(num){
        num += "";
        return parseInt( num.split("").reverse().join(""));
    }
    console.log(reverseNumber(12345));
})()