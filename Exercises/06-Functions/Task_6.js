//.6 Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
//* * * * *
//* * *
//* * * * * * *
function drows() {
  var result = "";
  //var numberOfArguments = arguments.length;
  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i]; j++) {
      result += "*";
    }
    result += "\n";
  }
  return result;
}

console.log(drows(5, 3, 7, 9, 4, 9));
