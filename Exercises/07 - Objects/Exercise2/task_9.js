// Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
//        var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//        var LOWER = 'abcdefghijklmnopqrstuvwxyz';

// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"

function swapsString(string) {
  var arr = string.split(" ");
  var result = []
  for (var index = 0; index < arr.length; index++) {
    const element = arr[index];
    result.push(element.charAt(0).toLowerCase()+element.substring(1,element.length).toUpperCase())
  }
  console.log(result.join(' '));
}

swapsString("The Quick Brown Fox");
