// Write a function to hide email addresses to protect them from unauthorized users.

// 	"somerandomaddress@example.com" -> "somerand...@example.com"

function hideAdress(adress) {
    var hide = adress.slice(0,8) + '...'+ adress.substring(adress.lastIndexOf('@'),adress.length);
    console.log(hide);
}

hideAdress("somerandomaddress@example.com");