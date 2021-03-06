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

//15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If
//we store the current speed value in the variable speed. Write an expression which will check if
//we are driving drive safely or not? (true if we are driving safe and false if not)
var speed = 76;
var lowSpeed = 60;
var hightSpeed = 120;
var safelyDriving = speed >= lowSpeed && speed <=120;
console.log(safelyDriving); 