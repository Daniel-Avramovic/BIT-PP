//5.Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw:
//*****
//*    *
//*    *
//*    *
//*****
function drawSqare(n) {
  var square = "";
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (i === 0 || i === n - 1) {
        square += "* ";
      } else if (j === 0 || j === n - 1) {
        square += "* ";
      } else {
        square += "  ";
      }
    }
    square += "\n";
  }
  return square;
}
var square1 = drawSqare(5);
console.log(square1);
