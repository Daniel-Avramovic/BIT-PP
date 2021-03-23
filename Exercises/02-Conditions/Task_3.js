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