//2. Write a program that shows text representation of a day in a week for a number input from 1 to 7. All other cases output a message explaining that input must be a number between 1 and 7.
//For input 1, output should be “Monday”.
//For input 10, output should be “Input must be a number between 1 and 7”.
var daysTask2 = 1
var result2;
switch(daysTask2) {
    case 1:
        result2 = ('Monday');
        break;
    case 2:
        result2 = ('Thuesday');
        break;
    case 3:
        result2 = ('Wednesday');
        break;
    case 4:
        result2 = ('Thursday');
        break;
    case 5:
        result2 = ('Friday');
        break;
    case 6:
        result2 = ('Saturday');
        break
    case 7:
        result2 = ('Sunday');
        break;
    default:
        result2 = ('Input must be a number between 1 and 7');
        break;
}
console.log(result2);