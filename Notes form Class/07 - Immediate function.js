// var f = 0; g = 1;

// for(var i = 0; i <=15; i++){
//     console.log(f);
//     f = f + g;
//     g = f - g;
// }

// function sum(num1, num2){
//     num1 = num1 || 0;
//     num2 = num2 || 0;

//     return num1 + num2;
// }

// var result = sum(5);
// console.log(result);

var result = (function(){
    console.log('boo');

    return 'some value';
})();

console.log(result);

(function(mood){
    console.log('Feeling ' + mood + '!');
})('crazy')

var user = 'Danijel';
var pass = '123';

var isUserAuth = (function(userName, password){
    //isValid = validate(userName, password)
    var isValid = true;

    return isValid;
})(user, pass);

if(isUserAuth){
    console.log('You are logged in');
}

