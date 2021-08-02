// Write a function that filters all even elements of the array.
// 	Input: [6, 11, 9, 0, 3]
// 	Output: [6, 0]

const input = [6, 11, 9, 0, 3, 2, 4];
const set = (val) => {
  if (val % 2 == 0) {
    return val;
  }
};

const res = input.filter(set);
console.log(res);

const check = (array) => {
  let niz = [];
  array.forEach((element) => {
    if (element % 2 == 0) {
      niz.push(element);
    }
  });
  return niz;
};

console.log(check(input));
