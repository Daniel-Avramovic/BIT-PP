var weathre = 'sunny';

switch (weathre) {
    case 'rainy':
        console.log('Rembre to bring and umbrella.');
        break;
    case 'sunny':
        console.log('Dress lightily.');
        break;
    case 'cloudy':
        console.log('Go oustside.');
        break;
    default:
        console.log('Unknown weather condition.');
        break;
}

var x = 4;
var y = 2;
var operation = '/';
switch(operation) {
    case '+':
        console.log(x + y);
    case '/':
    if(y !== 0) {
        console.log(x / y);
    } else{
        console.log('Can not devide by 0');
    }
    break;
    default:
    break;
}