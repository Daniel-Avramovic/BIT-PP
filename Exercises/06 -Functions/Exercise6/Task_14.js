//The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
// Starvation: less than 15
// Anorexic: less than 17.5
// Underweight: less than 18.5
// Ideal: greater than or equal to 18.5 but less than 25
// Overweight: greater than or equal to 25 but less than 30
// Obese: greater than or equal to 30 but less than 40
// Morbidly obese: greater than or equal to 40

function BMI(weight, height) {
  var bmi = weight / (height * height);
  if (bmi < 15) {
    return " Starvation: Your BMI is " + bmi + "!";
  } else if (bmi < 17.5) {
    return " Anorexic: Your BMI is " + bmi + "!";
  } else if (bmi < 18.5) {
    return " Underweight: Your BMI is " + bmi + "!";
  } else if (bmi >= 18.5 && bmi < 25) {
    return " Ideal: Your BMI is " + bmi + "!";
  } else if (bmi >= 25 && bmi < 30) {
    return " Overweigth: Your BMI is " + bmi + "!";
  } else if (bmi >= 30 && bmi < 40) {
    return " Obese: Your BMI is " + bmi + "!";
  } else if (bmi >= 40) {
    return " Morbidly obese: Your BMI is " + bmi + "!";
  }
}
console.log(BMI(83, 1.85));
