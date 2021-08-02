// Write a function that returns indexes of the elements greater than 10.
// Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// Output: [1, 2, 5]

const input = [1.6, 11.34, 29.23, 7, 3.11, 18];

const greater = (array) => {
  let arr = [];
  array.forEach((element, index) => {
    if (element > 10) {
      arr.push(index);
    }
  });
  return arr;
};

const output = greater(input);
console.log(output);
