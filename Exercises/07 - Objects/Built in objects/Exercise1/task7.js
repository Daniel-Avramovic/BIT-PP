// a.Write a function that checks if a given string is written in all capitals.
// b. Write a function that checks if a given string contains any digits.
// c. Write a function that checks if a given string is a valid hexadecimal color.
// d. Write a function that checks if a given number belongs to the interval from 1900 to 2018.
// e. Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

//a.
function checkIsCapitals(string) {
  if (string === string.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
console.log(checkIsCapitals("Daniel"));

//b.
function checkIsAnyDigit(string) {
  for (var i = 0; i < string.length; i++) {
    var element = string[i];
    console.log(element);
    if (element >= 0 || element <= 9) {
      return true;
    }
  }
  return false;
}
console.log(checkIsAnyDigit("Daniel11"));

//c.
function hexValidator(string) {
  var regex = /[^# a-f 0-9]/gi;
  if (!regex.test(string) && string.length > 3 && string.length < 8 && string[0] === '#') {
    return true;
  } else {
    return false;
  }
}
console.log(hexValidator("#32a85"));

//d. Write a function that checks if a given number belongs to the interval from 1900 to 2018.

function numberValidator(num) {
  if (num >= 1900 && num <= 2018) {
    return true;
  } else {
    return false;
  }
}
console.log(numberValidator(2020));

//e. Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

function  Validator(stringValidator, passwordValidator, colorValidator, yearValidator){
  this.stringValidator = stringValidator;
  this.passwordValidator = passwordValidator;
  this.colorValidator = colorValidator;
  this.yearValidator = yearValidator;
}

var valid = new Validator(checkIsCapitals('Danijel'), checkIsAnyDigit('Danije123'), hexValidator('#ff1234'), numberValidator(2015));
console.log(valid);