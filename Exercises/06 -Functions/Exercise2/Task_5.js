//Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1.

function firstChar(a, b) {
  var result = -1;
  for (var i = 0; i < a.length; i++) {
    if (a[i] === b) {
      result = i;
      break;
    }
  }
  return result;
}

console.log(firstChar("Danijel Avramovic", "v"));