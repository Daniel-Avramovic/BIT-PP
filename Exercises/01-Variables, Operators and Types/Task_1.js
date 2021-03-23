// If the variable age stores the information about user’s age, how we can check whether it contains a correct value? Write expressions for checking:
//Is age negative value
//Is age greater than 120 
var age = 33;
var isNegativeValue = age <= 0;
var isGreatherThen120 = age > 120;
var isInRange = ! isNegativeValue && ! isGreatherThen120;
console.log(isInRange);
//console.log(isNegativeValue);
//console.log(isGreatherThen120);
var ageIsOk = age >= 0 && age <=120;
console.log(ageIsOk);