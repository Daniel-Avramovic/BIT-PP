//Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.

function averageF() {
  var sum = 0;
  var counter = 0;
  var average;
  for (var i = 0; i < arguments.length; i++) {
      console.log(typeof(arguments[i]));
      if(typeof (arguments [i]) !== 'number'){
          continue;
      }else{
      sum += arguments[i];
      counter++;
      }
  }
  console.log(sum, counter);
  average = sum / counter;
  return average;
}
var result = averageF(2,3,4,5);
console.log(result);