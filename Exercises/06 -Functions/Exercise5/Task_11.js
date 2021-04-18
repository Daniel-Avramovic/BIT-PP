//Check if a given string is a palindrome (spaces are ignored).
//Input:  eye  | Geek  | a nut for a jar of tuna
//Output: true | false | true

function palindrome(input) {
  var tempOutput = "";
  var output = true;
  for (var i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      continue;
    } else {
      tempOutput += input[i];
    }
  }
  for (
    var i = 0, j = tempOutput.length - 1;
    i < tempOutput.length, j >= 0;
    i++, j--
  ) //console.log(i + 'index i ', j + 'index j ')
  {
    if (tempOutput[i] === tempOutput[j]) {
      output;
    } else {
      output = false;
    }
  }
  return output;
}
var output = palindrome("eyeye");
console.log(output);
