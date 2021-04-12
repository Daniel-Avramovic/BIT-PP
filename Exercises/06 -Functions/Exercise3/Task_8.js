"use strict";
//Write a function to find a word within a string.
//'The quick brown fox', 'fox' -> "'fox' was found 1 times"
//'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"

//var findWord = function (string, wordToFind) {
//  var counter = 0;
//  var currentWord = "";
//  string = string + " ";
//  for (var i = 0; i < string.length; i++) {
//    var currentChar = string[i];
//    if (currentChar === " ") {
//      if (currentWord === wordToFind) {
//        counter++;
//      }
//      currentWord = "";
//    } else {
//      currentWord += currentChar;
//    }
//  }
//  return counter;
//};
//
//console.log(findWord('The quick brown fox', 'fox'));

var findWord = function (string, wordToFind) {
  var counter = 0;
  var currentWord = "";
  string = string + " ";
  var endOfWord = false;

  for (var i = 0; i < string.length; i++) {
    var currentChar = string[i];

    switch (currentChar) {
      case " ":
      case ",":
      case ".":
      case "?":
      case "!":
      case ":":
      case ";":
        endOfWord = true;
        break;

      default:
        currentWord += currentChar;
        break;
    }
    if(endOfWord && currentWord === wordToFind){
      counter++;
    }
    currentWord = '';
  }
  return counter;
};

console.log(findWord("The quick brown fox", "fox"));
