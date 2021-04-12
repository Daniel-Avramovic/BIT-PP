//Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.

function retirement(a, b) {
  var retirementM = 65;
  var retirementW = 60;
  var res = 0;
  if ((a === "M" && b >= retirementM) || (a === "m" && b >= retirementM)) {
    res = "Is alredy retired";
  } else if (
    (a === "W" && b >= retirementW) ||
    (a === "w" && b >= retirementW)
  ) {
    res = "Is alredy retired";
  } else if (a === "M" || a === "m") {
    res = retirementM - b;
  } else if (a === "W" || a === "w") {
    res = retirementW - b;
  }
  return res;
}
console.log(retirement("w", 64));
