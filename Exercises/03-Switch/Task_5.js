//5.Write a program that for a 1-12 number input (representing a month in a year) shows what season it is. All inputs different from 1-12 output a message explaining that input must be a number between 1 and 12. 
var month1 = 6;
var result5;
switch (month1) {
    case 1:
    case 2:
    case 3:
        result5 = ('Winter')
        break;
    case 4:
    case 5:
    case 6:
        result5 = ('spring');
        break;
    case 7:
    case 8:
    case 9:
        result5 = ('Summer');
        break;    
    case 10:
    case 11:
    case 12:
        result5 = ('Autumn');
        break;
    default:
        result5 = ('Input must be a number between 1 and 12');
        break;
}
console.log(result5);
