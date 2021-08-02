// Write a function that capitalizes the first letter of each string argument it receives.
// Function arguments: ['hello', 'there', 'ES', 6]
// Output: ['Hello', 'There', 'ES']
const array = ["hello", "there", "ES", 6];
const toTitleCase = (arr) => {
  let res = [];
  arr.forEach((element) => {
    if (typeof element == "string") {
      res.push(element.substr(0, 1).toUpperCase() + element.substr(1));
    }
  });
  return res;
};

console.log(toTitleCase(array));
