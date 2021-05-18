//Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:
// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

function printListOfStrings(array) {
  var result = "";
  var indexlength = 0;
  var counterlength = 0;
  for (var i = 0; i < array.length; i++) {
    var currentString = array[i];
    var tempCount = 0;
    var tempIndex;
    for (var j = 0; j < currentString.length; j++) {
      tempCount++;
      tempIndex = i;
      //   console.log(tempCount);
    }
    if (counterlength < tempCount) {
      counterlength = tempCount;
      indexlength = tempIndex;
    }
  }
  for (var i = 0; i < array.length; i++) {
    var currentString = array[i];
    var res = "\n";

    for (var j = 0; j < counterlength; j++) {
      if (j === 0) {
        res += "* ";
      }
      if (currentString[j] === undefined) {
        res += " ";
      } else {
        res += currentString[j];
      }
    }
    result += res + " *";
  }
  console.log(result);
  //   console.log(indexlength, counterlength);
}
printListOfStrings(["Hello", "World", "in", "a", "frame"]);
