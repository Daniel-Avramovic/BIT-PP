//a. Write a function that generates a random integer value between 5 and 20.
//b. Write a function that generates a random integer value between 50 and 100.
//c. Write a function which expects a number and a callback generator function and returns an array of numbers produced by the generator function.

function randomInteger(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function arr(num, func) {
  var array = [];
  for (var i = 0; i < num; i++) {
    array.push(func(5, 20));
    array.push(func(50, 100));
  }
  return array;
}
var array1 = arr(10, randomInteger);

console.log(array1);
