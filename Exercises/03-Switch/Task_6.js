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