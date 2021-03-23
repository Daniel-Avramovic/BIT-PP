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