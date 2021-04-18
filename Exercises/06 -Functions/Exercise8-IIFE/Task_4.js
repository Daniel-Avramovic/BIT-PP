//4.Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com.
//Input: pera peric
//Output: pera.peric@gmail.com

var email = (function (name, surname) {
  var eMail = "surname@gmail.com";
  var restOfMail = "";
  for (var i = 0; i < eMail.length; i++) {
    if (eMail[i] === "@") {
      var pos = i;
      for (var i = pos; i < eMail.length; i++) {
        restOfMail += eMail[i];
      }
    }
  }
  if (name === undefined) {
    eMail = surname + restOfMail;
  } else if (surname === undefined) {
    eMail = name + restOfMail;
  } else {
    eMail = name + "." + surname + restOfMail;
  }
  return eMail;
})("pera", "peric");
console.log(email);
