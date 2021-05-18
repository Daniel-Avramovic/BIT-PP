//Why pay a fortune teller when you can just program your fortune yourself?
//Write a function named tellFortune that:
//takes 4 arguments: number of children, partner's name, geographic location, job title.
//outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
//Call that function 3 times with 3 different values for the arguments.

function tellFortune (x, y, z, n){
return 'You will be a ' + x + ' in ' + y + ', ' + 'and married to ' + z + ' with ' + n + ' kids.';  
}
console.log(tellFortune('Doctor', 'London', 'Maria', 'two' ));
console.log(tellFortune('Driver', 'Frankfurt', 'Ana', 'one' ));
console.log(tellFortune('Programer', 'Wien', 'Daria', 'three' ));
