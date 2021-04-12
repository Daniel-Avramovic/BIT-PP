//Write a function to hide email address.
//"myemailaddress@bgit.rs" -> "mye...@bgit.rs"

function hideMail(email) {
  var hidenMail = "";
  var first3 = "";
  var lastRest = "";
  for (var i = 0; i < 3; i++) {
    first3 += email[i];
  }
  for (var i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      var pos = i;
      for (var i = pos; i < email.length; i++) {
        lastRest += email[i];
      }
    }
  }
  hidenMail = first3 + "..." + lastRest;
  return hidenMail;
}
console.log(hideMail("myemailaddress@bgit.rs"));
