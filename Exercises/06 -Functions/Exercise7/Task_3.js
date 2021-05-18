//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amount){
    var expLife = 100;
    var amountPerYear = parseInt(365 * amount) * (expLife - age);
    return 'You will need ' + amountPerYear + ' kilograms to last you the ripe old age of ' + expLife;
}
console.log(calculateSupply(32, 0.150))
console.log(calculateSupply(45, 0.200))
console.log(calculateSupply(50, 0.300))