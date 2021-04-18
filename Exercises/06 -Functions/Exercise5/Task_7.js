//Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
//Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
//Output: AnStJoJoDaMa

function createNewString(array) {
  var newString = "";
  for (var i = 0; i < array.length; i++) {
    var curentIndex = array[i];
    for (var j = 0; j < curentIndex.length; j++) {
      if (curentIndex.length > 2 && j < 2) {
        newString += curentIndex[j];
      }
    }
  }
  return newString;
}S

console.log(
  createNewString([
    "M",
    "Anne",
    12,
    "Steve",
    "Joe",
    "John",
    "David",
    "Mark",
    true,
    "A",
  ])
);
