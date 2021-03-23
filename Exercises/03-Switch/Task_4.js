//4. Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name. All other cases output a message explaining that input must be a number between 1 and 12. 
//For input 2, output should be “February”.
//For input 6, output should be “June”.
//For input 13, output should be “Input must be a number between 1 and 12”.

var month = 3;
var result4;
switch (month) {
    case 1:
        result4 = ('January')
        break;
    case 2:
        result4 = ('February')
        break;
    case 3:
        result4 = ('March')
        break;
    case 4:
        result4 = ('April')
        break;
    case 5:
        result4 = ('May')
        break;
    case 6:
        result4 = ('June')
        break;
    case 7:
        result4 = ('July')
        break;
    case 8:
        result4 = ('August')
        break;
    case 9:
        result4 = ('Septmber')
        break;
    case 10:
        result4 = ('October')
        break;
    case 11:
        result4 = ('November')
        break;
    case 12:
        result4 = ('December')
        break;
    default:
        result4 = ('Input must be a number between 1 and 12');
        break;
}
console.log(result4);