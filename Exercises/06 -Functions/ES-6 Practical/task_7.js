// Write a function that filters all integer arguments that contain digit 5.
// Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553
// Output: [45, 553]

const input = [23, 11.5, 9, "abc", 45, 28, 553];

const filterDigitInteger = (array) => {
  const integer = [];
  array.forEach((element) => {
    if (Number.isInteger(element) && element.toString().includes("5")) {
      integer.push(element);
    }
  });
  return integer;
};

const filtered = filterDigitInteger(input);

console.log(filtered);
