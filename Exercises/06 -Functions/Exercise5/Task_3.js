//Initialize two arrays. The first one should contain student names, the second one the number of points for each student. //Display students' names with their corresponding grade. Use the following ranges:
//51-60 -> 6,
//61-70 -> 7,
//71-80 -> 8,
//81-90 -> 9,
//91-100 -> 10.
//Input:
//[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ],
//[ 50, 39, 63, 72, 99, 51, 83, 59 ]
//Output:
//Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.

function studentGrade(name, marks) {
  var studentNameAndGrade = '';
  for (var i = 0; i < name.length; i++) {
    var studentName = name[i];
    var studentNameGrade;
    if (marks[i] > 50 && marks[i] <= 60) {
      studentNameGrade = studentName + ' asquired '+ marks[i] + ' points and earned ' + 6 + '.';
    } else if (marks[i] > 61 && marks[i] <= 70) {
      studentNameGrade = studentName + ' asquired '+ marks[i] + ' points and earned ' + 7 + '.';
    } else if (marks[i] > 71 && marks[i] <= 80) {
      studentNameGrade = studentName + ' asquired '+ marks[i] + ' points and earned ' + 8 + '.';
    } else if (marks[i] > 81 && marks[i] <= 90) {
      studentNameGrade = studentName + ' asquired '+ marks[i] + ' points and earned ' + 9 + '.';
    } else if (marks[i] > 91 && marks[i] <= 100) {
      studentNameGrade = studentName + ' asquired '+ marks[i] + ' points and earned ' + 10 + '.';
    } else if(marks[i] <= 50){
      studentNameGrade = studentName + ' asquired '+ marks[i] + ' points and failed to complete the exam.';
    }
    studentNameAndGrade +=  studentNameGrade + '\n'
  }

  return studentNameAndGrade;
}

console.log(
  studentGrade(
    ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"],
    [50, 39, 63, 72, 99, 51, 83, 59]
  )
);
