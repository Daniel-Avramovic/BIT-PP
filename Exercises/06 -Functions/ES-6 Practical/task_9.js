// Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals.
// Write a function that prints out the names of persons older than 25.
// Write a function that check if there is a person older than 40.
// Write a function that checks if all persons are older than 20.

const person = [
  { name: "Pera", age: 25 },
  { name: "Daniel", age: 30 },
  { name: "John", age: 45 },
];

const printName = (array) => {
  array.forEach((element) => {
    if (element.age > 25) {
      console.log(element.name);
    }
  });
};

const checkOlder = (array) => {
  array.forEach((element) => {
    if (element.age > 40) {
      console.log(
        `You have a person older than 40, name is: ${element.name}!!!`
      );
      return;
    }
  });
};

const checkAll = (array) => {
  let res = `All person are older than 20 age!!!`;
  array.forEach((element) => {
    if (element.age < 20) {
      res = `You have person younger then 20 age!!!`;
    }
  });
  console.log(res);
};
printName(person);
checkOlder(person);
checkAll(person);
