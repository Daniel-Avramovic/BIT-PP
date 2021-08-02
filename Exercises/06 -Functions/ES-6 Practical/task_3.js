// Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.
// 	Input: [4, 6, 11, -9, 2.1], 2
// 	Output: [6, 8, 13, -7, 4.1]

const input = [4, 6, 11, -9, 2.1];

const increases = (arr, val) => {
  val = val || 1;
  const maped = arr.map((x) => x + val);
  return maped;
};
console.log(increases(input, 2));
