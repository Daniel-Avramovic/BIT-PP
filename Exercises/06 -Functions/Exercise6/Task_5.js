//Write a program that prints a multiplication table for numbers up to 12.

function multiplication(num) {
  for (var i = 0; i <= 10; i++) {
    var res = "";
    res += num + " * " + i + " = " + num * i + "\n";
    console.log(res);
  }
}
var res = multiplication(12);

(function (n) {
  var res = "";
  for (var i = 1; i <= n; i++) {
    var row = i;
    for (var j = 1; j <= n; j++) {
      var column = j;
      res += row * column + "\t";
    }
    res += "\n";
  }
  console.log(res);
})(12);
