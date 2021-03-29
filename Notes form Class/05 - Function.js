function sumTwo(a, b) {
    var c = a + b;
    return c;
}
var result = sumTwo(5, 6);
console.log(result);

function flexibleSum() {
    return arguments;
}
var flexResult = flexibleSum();
console.log(flexResult);

function flexibleSum1(){
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
var flexResult1 = flexibleSum1(1, 2, 3, 4);
console.log(flexResult1);