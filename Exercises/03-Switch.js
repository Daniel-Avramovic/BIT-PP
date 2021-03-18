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

//3.Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a weekday or weekend. All other cases output a message explaining that input must be a number between 1 and 7.
//For input 2, output should be “It’s weekday”.
//For input 6, output should be “It’s weekend”.
//For input 12, output should be “Input must be number between 1 and 7”.

var daysTask3 = 6;
var result3;
switch(daysTask3) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        result3 = ('It’s weekday');
        break;
    case 6:
    case 7:
        result3 = ('It’s weekend');
        break;
    default:
        result3 = ('Input must be a number between 1 and 7');
        break;
}
console.log(result3);

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

//6. Write a program that for a string input of a grade from “A”-“F” outputs a proper info message about that grade in the following manner: A - "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"", F - "Failed". Input different from letters A-F outputs a message "Unknown grade".

var grade = 'A';
var result6;
switch (grade) {
    case 'A':
        result6 = ('Good job');
        break;
    case 'B':
        result6 = ('Pretty good');
        break;
    case 'C':
        result6 = ('Passed');
        break;
    case 'D':
        result6 = ('Not so good');
        break;
    case 'F':
        result6 = ('Failed');
        break;
    default:
        result6 = ('Unknown grade')
        break;
}
console.log(result6);
//7.Write a program that takes as input a city name and outputs the country where the city is. You may choose which cities and countries you want to output yourself, however there has to be at least 5 countries and 15 cities. Note that each country must have a different number of cities. Input different from the listed cities should output a message"Please choose a different city".

var city = 'Zagreb';
var resCity; 
switch (city) {
    case 'Beograd':
    case 'Novi-Sad':
    case 'Kragujevac':
        resCity = ('Serbia');
        break;
    case 'Sarajevo':
    case 'Banja-Luka':
    case 'Tuzla':
    case 'Sarajevo':
        resCity = ('BiH');
        break;
    case 'Zagreb':
    case 'Split':
    case 'Rijeka':
    case 'Osjek':
        resCity = ('Croatia');
        break;
    case 'Wien':
    case 'Graz':
    case 'Linz':
    case 'Wels':
        resCity = ('Osteraih');
        break;
    case 'Podgorica':
    case 'Niksic':
    case 'Bjelo-Polje':
    case Bar:
        resCity = ('Montenegro');
        break;
    default:
        resCity = ('Please choose a different city');
        break;
}
console.log(resCity);
//8. Write a program that takes as input two numbers and a string denoting the operation (“+”, “-”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!

 var x = 4;
 var y = 0;
 var operations = '+';
 var resOperations;
 switch (operations) {
     case '+':
        resOperations = (x + y);
        break;
    case '-':
        resOperations = (x - y);
        break;
    case '*':
        resOperations = (x * y);
        break;
    case '/':
        if (y !==0) {
            resOperations = (x / y);
        } else {
            resOperations = ('Can not devide by 0')
        }
        break;
    default:
        resOperations = ('Input a number')
        break;
 }
 console.log(resOperations);
