//7. Write a program that computes average marks of the following students. Then use this average to determine the
//corresponding grade. 

var students = [
    ['David', 80],
    ['Marko', 77],
    ['Dany', 88],
    ['John', 95],
    ['Thomas', 68]
];
var avgPoints;
var sumOfPointis = 0;
var numOfStudents = students.length;

for(i = 0; i < numOfStudents; i++) {
    var currentStudentsName = students[i][0];
    var currentStudentsPoints = students[i][1];
    sumOfPointis += currentStudentsPoints;
    avgPoints = sumOfPointis/numOfStudents;

    if(currentStudentsPoints < 60) {
        console.log(currentStudentsName + "'s' grade is:F");
    }else if(currentStudentsPoints < 70) {
        console.log(currentStudentsName + "'s' grade is:D")
    }else if(currentStudentsPoints < 80) {
        console.log(currentStudentsName + "'s' grade isC")
    }else if(currentStudentsPoints < 90) {
        console.log(currentStudentsName + "'s' grade is:B")
    }else if(currentStudentsPoints < 100) {
        console.log(currentStudentsName + "'s' grade is:A")
    }
}
console.log(avgPoints);