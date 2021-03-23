//1.Write a program that shows text representation of a day in a week for a number input from 1 to 7. Print output in console. 
//For input 1, output should be “Monday”.

var days = 1;
var result1;
switch(days) {
    case 1:
        result1 = ('Monday');
        break;
    case 2:
       result1 = ('Thuesday');
        break;
    case 3:
        result1 = ('Wednesday');
        break;
    case 4:
        result1 = ('Thursday');
        break;
    case 5:
        result1 = ('Friday');
        break;
    case 6:
        result1 = ('Saturday');
        break
    case 7:
        result1 = ('Sunday');
        break;
}
console.log(result1);