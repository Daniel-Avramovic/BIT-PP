// Write a function that checks if the given array is an array of positive integer values.
// Input: [3, 11, 9, 5, 6]
// Output: yes

// Input: [3, -12, 4, 11]
// Output: no

const input1 = [3, -11, 9, 5, 6];
const input2 = [3, 12, 4, 11];

const checkPositveInteger = (array) => {
  let res = "Yes!";
  array.forEach((element) => {
    if (Number.isInteger(element) && element < 0) {
      res = "No!";
    }
  });
  console.log(res);
};

checkPositveInteger(input1);
checkPositveInteger(input2);
