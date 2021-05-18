function vacationStartDate(day, month) {
  var date;

  date = day + "." + month;

  return date;
}

var startDate = vacationStartDate(5, 7);

console.log(startDate);

var c = 10;

function f(a, b) {
  console.log(a);
  console.log(b);
  console.log(c);
}

f(3, 4);

// function mathToolkit(a, b) {
//   var sum = function (x, y) {
//     return x + y;
//   };
//   var mul = function (x, y) {
//     return x * y;
//   };

//   // a + b + a*b
//   return sum(a, b) + mul(a, b);
// }
// var res = mathToolkit(3, 4);
// console.log(res);


// function mathToolkit(a, b) {
//     var offset = 10;
//   var sum = function (a, b) {
//     return a + b + offset;
//   };
//   var mul = function (a, b) {
//     return a * b;
//   };

//   // a + b + a*b
//   return sum(a, b) + mul(a, 5);
// }
// var res = mathToolkit(3, 4);
// console.log(res);

function mathToolkit(a, b) {
    var offset = 10;
  var sum = function (a, b) {
    return a + b + offset;
  }
  return sum;
}
var res = mathToolkit(3, 4);
console.log(res);
console.log('-----------------------')
var isValidUsername = function(username) {
    return username.length > 5;
}
var isValidPassword = function (password) {
    return password.indexOf('*') != -1;
};

var checkUser = function(userdata, validator){
    return validator(userdata);
}

var username = 'pera';
var password = 'ab+c';

console.log(checkUser(username, isValidUsername));
console.log(checkUser(password, isValidPassword));

