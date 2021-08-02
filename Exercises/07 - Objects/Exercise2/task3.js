// Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.

// 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"

(function () {
  function alphaWords(string) {
    string =  string.split(' ');
    var new1 = [];
    for (var i = 0; i < string.length; i++) {
        var element = string[i];
        new1.push(element.split('').sort().join(''));
        
    }
    
    return new1.join(' ');
  }
  console.log(alphaWords('Republic Of Serbia'))
})();
