/*var result = '', a = 1, b = 1;
if (a === 1) {
    if (b === 2) {
       result = 'a is 1 and b is 2';
   } else {
       result = 'a is 1 but b is not 2';
   }
    } else {
   result = 'a is not 1, no idea about b';
}
console.log(result);*/

/*var result = "";
if(typeof somevar !== "undefined") {
    result = "yes";
}*/
/*var isSaturday = false;
var isAfternoon = false;
var message = '';

if(isSaturday === true) {
    message += "we are at BIT";
    if(isAfternoon === true) {
        message += " and we have PP"
    } else {
    message += "and we have WEB";
}
}else {
    message = "we are not at BIT"
}
console.log(message);*/
//Write a program that compares two numbers and display the larger. Result should be displayed in the console.
/*var result = '';
 var num1 = 37;
 var num2 = 3;
 if(num1 > num2) {
     result = 'Number ' + num1 + ' is larger then' + num2
 } else if (num2 > num1){
    result = 'Number ' + num2 + ' is larger then' + num1
 }else {
     result = "Number are equal"
 }
 console.log(result)*/

//Ternani operatori
var num = 4;
/*if (num % 2 === 0) {
    console.log('even');
} else {
    console.log('odd');
}*/

//(num % 2 === 0) ? console.log('evan') : console.log('odd');
var result = (num % 2 === 0) ? ('even') : ('odd');
console.log(result);
  
 