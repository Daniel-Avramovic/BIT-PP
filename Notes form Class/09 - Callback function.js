function invokeAdd(f1, f2) {
  return f1() + f2();
}
function one() {
  return 1;
}
function two() {
  return 2;
}

console.log(invokeAdd(one, two));
console.log(
  invokeAdd(
    function () {
      return 2;
    },
    function () {
      return 3;
    }
  )
);

console.log(one());

(function () {
    var result;
    function sum (a, b){
        return a + b;
    }
    result = sum(5 , 6)
    console.log(result)
})();
