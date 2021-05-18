//Write a function to input temperature in Centigrade and convert to Fahrenheit.
function centigradeToFarenheit(temperature){
    var fahrenheit = '';
    fahrenheit = temperature + ' Centigrade is ' + (temperature * 1.8 + 32) + ' Farenheit.';
    return fahrenheit; 
}
var result = centigradeToFarenheit(32);
console.log(result);