//var count = 10;

//while (count < 10) {
//    count = count + 1;
//   console.log(count);
//}

/*while (true) {
    if(count === 10) {
        break;
    }
    count = count + 1;
    console.log(count);
}*/
/*do {
    count = count + 1;
    console.log(count);
}
while (count < 10);*/

/*var punishment = '';
for(var i = 0; i < 100; i++){
    punishment += 'I will never do this again\n'
}
console.log(punishment);*/
var suma = 0;
//for(var i = 1; i <= 100; i++)  {
//    suma = suma + i;
//}
//console.log(suma);
for(var i = 1; i <= 100; i++) {
    if(suma === 0) {
        console.log('Suma is ' + suma);
    }
    suma = suma + i; // suma += i;
    if(suma > 30) {
        break;
    } 
}
console.log(suma);


var a = ['a', 'b', 'c', 'x', 'y', 'z'];
var result = '\n';
for (var i in a) {
 result += 'index: ' + i + ', value: ' + a[i] + '\n';
}
console.log(result);