//Task 1. Write a conditional statement to find the sign of product of three numbers. Display the result in the console 
//with the specified sign.
//Sample numbers: 3, -7, 2 
//Output: The sign is - 
var output = "The sing is ";
a = 3,
b = -7;
x = 2;
/*if(a * b * x <=0){
    output += a * b *x
} else{
    output = 'The sing is in +';
}*/
var prod = a * b * x;
if(prod<0) {
    output += prod;
} else {
    output = 'The sing in +';
}

console.log(output)


//Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the console.
//Sample numbers: -5, -2, -6, 0, -1 
//Output: 0 

var largest = "Largest number is ";
var d = -5; 
var e = -2;
var f = -6;
var g = 0;
var h = -1;
// Jedno pitanje, sigurno postoji resenje da se porede dva po dva broja i da se veci broj sacuva i prebaci u sledeci korak. Recimo pitamo "ako je -2 > - 5" sacuvaj - 2, a ako nije sacuvaj - 5 i tu imamo -2. Sledece isti korak za 6 i 0;
// pa onda ono sto je ostalo -2 poredimo sa 0 i na kraju 0 sa -1? Ne znam da li si me razumeo na sta sam mislio? Ako ne, reci cu ti na casu, pa ako mozes da mi kazes resenje. Znao bih mozda da postavim  sve uslove, ako ne znam kako da sacuvam resenje za sledeci korak? Hvala unapred :)
/*if(d > e && d > f && d > g && d > h){
    largest += d
} else if( e > d && e > f && e > g && e > h) {
    largest += e
} else if(f > d && f > e && f > g && f > h) {
    largest += f
} else if (g > d && g > e && g > f && g > h) {
    largest += g
} else {
    largest += h
}*/

/*if(d > e && d > f && d > g && d > h){
    largest += d
} else if(e > f && e > g && e > h) {
    largest += e
} else if(f > g && f > h) {
    largest += f
} else if(g > h) {
    largest += g
} else {
    largest += h
}*/
//console.log(largest);
var max = d;
if(e > max) {
    max = e;
} if(f > max) {
    max = f;
} if(g > max) {
    max = g;
} if(g > max) {
    max = g;
}
console.log(max);


//Task 3. Write a conditional statement to print three numbers as sorted number list.
//Sample numbers : 0, -1, 4 
//Output : 4, 0, -1 

var n1 = 0;
var n2 = -1;
var n3 = 4;
var list;
/*if(n1 > n2 && n1 > n3 && n2 > n3) {
    list ='0, -1, 4';
} else if(n2 > n1 && n2 > n3 && n1 > n3) {
    list = '-1, 0, 4';
} else if (n3 > n1 && n3 > n2 && n1 > n2) {
    list = '4, 0, -1'
}*/
if(n1 > n2 && n1 > n3) {
    if(n2 > n3) {
        consol.log(n1, n2, n3); 
    } else {
        console.log(n1, n3, n2);
    }
} else if(n2 > n1 && n2 > n3) {
    if(n1 > n3) {
        console.log( n2, n1, n3);
    } else {
        console.log(n2, n3, n1);
    }
} else if(n3 > n1 && n3 > n2) {
    if (n1 > n2) {
        console.log(n3, n1, n2);
    } else {
        console.log(n3, n2, n1);

    }
}
console.log(list);

//Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is,print the result, if not, show “X”.
//Sample input: 10  					Sample input: 7
//Output: 10 / 2 = 5					Output: X  

var inputNumber = 10;
if(typeof inputNumber === "number") {
    if((inputNumber % 2) === 0){
        console.log(inputNumber / 2)
    } else{
        console.log("x")
    }
} else {
    console.log('Input is not a number');
}

//Task 5. Write a program that compares two numbers and displays the larger. Display the result in the console.

num1 = 5;
num2 = 5;

if (num1 > num2) {
    console.log(num1)
} else if (num2 > num1) {
    console.log(num2)
} else {
    console.log('Number is equal');
}

//Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
//Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
//Sample Input: 60°C
//Output : 60°C is 140 °F

var celsius = 60;
var f = '';
var c1 = ' °C is ';
var f1 = ' °F';
if (f = (9*celsius/5) + 32) {
    console.log(celsius+c1+f+f1);
}

//Task 7. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double difference between that number and 13.
//Sample Input: 11					Sample Input: 32
//Output : 2						Output : 38

var num3 = 32;
var num4 = 13;
if (num4 >= num3) {
    console.log(num4 - num3)
} else {
    console.log((num3 - num4)*2)
}

//Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
//Sample Input: 12,5					Sample Input: 8,8
//Output : 17						Output : 48

i = 8;
i1 = 8;
if (i != i1){
        console.log(i + i1);
}else {
        console.log((i+i1)*3);
}


//Task 9. Write a JavaScript program to check two given numbers and print “true” if one of the number is 50 or if their sum is 50.
//Sample Input: 5,54			Sample Input: 6,50			Sample Input: 40,10
//Output : -				    Output : true				Output : true


checkNum1 = 5;
checkNum2 = 54;
if ((checkNum1 === 50) || (checkNum2 === 50) || ((checkNum1 + checkNum2) === 50) ) {
    console.log('true')
} else {
    console.log('false');// Ovde se ne trazi da se ovo ispise, ali malo lepse izgleda.
} 

//Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400, and print range in which number belongs.
//Sample Input: 13			Sample Input: 34			Sample Input: 256
//Output : -				Output : 20 ⇔ 100			Output : 100 ⇔ 400

input = 256;
if (input < 20) {
    console.log('Not in range!')
} else if ((input >= 20) && (input <= 100)) {
    console.log('20 ⇔ 100')
} else if ((input >= 100) && (input <= 400)) {
    console.log('100 ⇔ 400')
}  else {
    console.log('Not in range too!') 
}
