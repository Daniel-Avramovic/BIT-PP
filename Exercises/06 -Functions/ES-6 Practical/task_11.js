// Write a function that calculates the product of the elements of the array.
// Input: [2, 8, 3]
// Output:  48

const input = [2, 8, 4];

const calcProduct = (array) => {
  let result = 1;
  array.forEach((element) => {
    result *= element;
  });
  console.log(result);
};

calcProduct(input);
