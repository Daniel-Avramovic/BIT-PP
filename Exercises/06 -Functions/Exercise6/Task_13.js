//Write a function to find all the numbers greater than the average.
function greaterThanAverage() {
  var sum = 0;
  var average;
  var greater = [];
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  average = sum / arguments.length;
  for (var i = 0; i < arguments.length; i++) {
    if (average < arguments[i]) {
      greater[greater.length] = arguments[i];
    }
  }
  console.log('Average is ' + average);
  return 'This is a number greater than the average ' + greater;
}
console.log(greaterThanAverage(2,5,7,7,5,32,7,9,0))

console.log('-----------------')

