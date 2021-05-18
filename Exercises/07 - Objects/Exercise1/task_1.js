// Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!
var favouriteCoffee = {
  name: "Cappuccino",
  strength: "weak",
  flavour: "vanila",
  milk: "yes of course",
  sugar: "with sugar",
};
// solution form class

var coffee = {
  name: "Esspreso",
  strength: 2,
  flavour: "vanila",
  milk: true,
  sugar: 1,
  getCoffeeStrength: function () {
    var strength = "";
    switch (coffee.strength) {
      case 1:
        strength = "Extra light";
        break;
      case 2:
        strength = "Light";
        break;
      case 3:
        strength = "Medium";
        break;
      case 4:
        strength = "Strong";
        break;
      case 5:
        strength = "Extra Strong";
        break;
        default:
            strength = 'Medium';
    }
    return strength;
  },
  getMilkInfo: function() {
    return coffee.milk ? 'with milk' : 'without milk';
  }
};
console.log('I like to dring ' + coffee.getCoffeeStrength()+ ', ' + coffee.name + ' coffee!')
console.log(coffee.getMilkInfo());