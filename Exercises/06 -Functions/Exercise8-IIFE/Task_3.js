//Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements.
//	Input: prograMming
//	Output: progra**ing, 2
(function (string) {
  var output = "";
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "M" || string[i] === "m") {
      output += "*";
      counter++;
    } else {
      output += string[i];
    }
  }
  console.log(output + ", " + counter);
})("prograMming");
