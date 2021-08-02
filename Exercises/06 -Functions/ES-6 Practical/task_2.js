// Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
// 	Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
// 	Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
// 	Output2: [ 24, 20 ] // tax only
const taxRate = 20;
const input = [
  { name: "Banana", price: 120 },
  { name: "Orange", price: 100 },
];
const calcTax = (arr, tax) => {
  arr.forEach((element) => {
    element.price = element.price + (element.price / 100) * tax;
  });
  return arr;
};

console.log(calcTax(input, taxRate));
