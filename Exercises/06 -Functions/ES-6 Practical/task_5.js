// Write a function that filters all the strings from the given array that contain substring JS or js.
// Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
// Output: ['babel.js, 'JS standard']
const input = ["compiler", "transpiler", "babel.js", "JS standard", "linter"];

const filterString = (array) => {
  let output = [];
  array.forEach((element) => {
    if (element.includes("js") || element.includes("JS")) {
      output.push(element);
    }
  });
  return output;
};

console.log(filterString(input));
