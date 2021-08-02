// Write a function to capitalize the first letter of a string and returns modified string.

// "js string exercises" -> "Js string exercises"

function capitalizaFirst(string) {
  var res = string.charAt(0).toUpperCase() + string.slice(1, string.length);
  console.log(res);
}

capitalizaFirst("js string exercises");
