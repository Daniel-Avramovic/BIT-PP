//var f = function(a){
//    return a;
//}
//
//f();

//var f;
//var result = "";
//f = function (a) {
//  return a + 1;
//};
//
//result = f(1);
//
//console.log(result);


var f;
var result1 = "";
var result2;
//literal notation
f = function (a) {
  return a + 1;
};
//function definition

function sum(a, b){
    return a + b;
}



result1 = f(1);
result2 = sum(1, 2);

console.log(result1);
console.log(result2);


var sum = function(a, b){
    return a + b;
}
var add = sum;

console.log(typeof add);
