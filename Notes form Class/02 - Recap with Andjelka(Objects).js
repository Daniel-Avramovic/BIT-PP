// var user = {
//     username: 'Pera',
//     password: '12345',
//     email: 'pera@gmail.com',
//     age: 25,
//     isAdrmin: false,
// };

// var propertyName = 'email';
// console.log(user[propertyName]);
// user.password = 'abcde';
// // user.adress = 'Neka ulica 34';

// user.adress = {
//     street: 'Neka ulica',
//     streetNumber: 34,
//     city: 'Beograd',
// }

// // console.log(user['username']);
// console.log(user.adress.city);
// // console.log(typeof user);

// function change(x){
//     x += 10;
//     console.log(x);
//     return x;
// }

// var x = 5;
// x = change(x);
// console.log(x);

// function change(obj){
//     obj.x += 10;
//     console.log(obj.x);
// }

// var obj = {x:5};
// change(obj);
// console.log(obj);


// function User(usename,password){
//     // this = {};
//     this.usename = usename;
//     this.password = password;

//     this.changePassword = function(newPassword){
//         this.password = newPassword;

//     }
//     //return this;
// }

// var user = new User('Pera', '123');

// console.log(user);
// user.changePassword('4331');
// console.log(user);

// console.log(global);
// console.log(this);

// var user = {
//     username: 'pera',
//     password: '1234',
//     changePassword: function(pass){
//         this.password = pass;
//     }
// };


// var x = 6;
// var y = 5;
// var object = {
//     x: 5,
//     y: 8,
//     sum: function(x, y){
//         return this.x + this.y;
//     }
// }
// console.log(object.sum(2,3));
// 'use strict';
var obj = new Object();
Object.defineProperty(obj, 'x', {
    value: 1,
    // writable: true,
    writable: false,
    enumerable: true,
});
Object.defineProperty(obj, 'y', {
    value: 5,
    writable: true,
    enumerable: true,
});

// obj.x = 10;
console.log(obj);

for (property in obj){
    console.log(property, obj [property]);
}
