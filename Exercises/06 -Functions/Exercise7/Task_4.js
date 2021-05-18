//It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".

// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celsiusToFahrenheit(input){
    var celsius = input;
    var result = input * 1.8 + 32;
    return celsius + '°C is ' + parseInt(result) + '°F';
}
function fahrenheitToCelsius(input){
    var fahrenheit = input;
    var result = (input - 32) * 5/9;
    return fahrenheit + '°F is ' + parseInt(result) + '°C';
}
console.log(celsiusToFahrenheit(37));
console.log(fahrenheitToCelsius(70));