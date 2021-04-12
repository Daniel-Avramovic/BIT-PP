//var global = 2;
//var result;
//var temp;
//var a;
//function myFunc(x, y) {
//    var x;
//    var y;
//    var local = 3;
//    return local;
//}
//var result = myFunc();
//console.log(result);

//function myFunc(x){
//    return x + global;
//}
//var result = myFunc(2);
//console.log(result);

//function myFunc2(y) {
//    var inner = 'abc';
//    function myFunc(x){
//        var local = 3;
//        console.log(global);
//        console.log(inner);
//        return x + global;
//    }
//}
//
//var result = myFunc(2);

//function myFunc(x){
//    console.log(global);
//    return x + global;
//}
//if(true){
//    a = 6;
//}
//
//for(var i = 0; i < 3; i++){
//}
//result = myFunc(2);
//temp = result + 1;
//
//console.log(temp);
 
var global;
var global2;
var myFunc;
global = 123;
myFunc()

function myFunc () {
    var global;
    console.log(global);
    global = 1;
    console.log(global);
}