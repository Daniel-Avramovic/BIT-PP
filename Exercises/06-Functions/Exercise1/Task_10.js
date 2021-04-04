//10. Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.
var imena = "Daniel Avramovic";
function numberOfA() {
  var sum = 0;
  for (var i = 0; i < imena.length; i++) {
    if (imena[i] === "A" || imena[i] === "a") {
      sum++;
    }
  }
  return sum;
}
var array = numberOfA(imena);
console.log(array);
