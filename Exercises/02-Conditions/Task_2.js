//Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the console.
//Sample numbers: -5, -2, -6, 0, -1 
//Output: 0 

var largest = "Largest number is ";
var d = -5; 
var e = -2;
var f = -6;
var g = 0;
var h = -1;
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