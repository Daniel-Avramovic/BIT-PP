//Write a function to find the element that occurs most frequently.
function mostFrequently(input) {
  var element = input[0];
  var countElement = 0;
  for (var i = 0; i < input.length; i++) {
    var tempElement = input[i];
    var tempCount = 0;
    for (var j = 0; j < input.length; j++) {
      if (tempElement === input[j]) {
        tempCount++;
      }
    }
    if (countElement < tempCount) {
      countElement = tempCount;
      element = tempElement;
    }
  }
  return 'Element ' + element + ' is most frequently and repeated ' + countElement + ' times.'
}

console.log(mostFrequently('Danijel Avramovic'));