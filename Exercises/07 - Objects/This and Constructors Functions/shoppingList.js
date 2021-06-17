"use strict";
// In your IDE of choice, create a new JavaScript file named shopping.js and make it so that all code written in the file follows strict mode.

// Create an anonymous immediately-invoking function that will hold the main execution of all program calls. Writing a simple command console.log(“Hi”) inside this function and running the code should output “Hi“ in the console.

// Create constructor functions with properties representing the following “things”:
// Product - product id (random number of 5 digits generated on every product creation), name, price (with 2 decimal places), expiration date
// ShoppingBag - a list of products (initially empty; function constructor does not have any input parameters)

// Add getInfo method to Product. It should return a formatted string containing product code (the first and last letter of the name together with the product id), name and price.
// "Banana" -> BA32784, Banana, 129.31

// Add addProduct method to ShoppingBag. It should receive a Product and add it to the product list. You can add a product to the list only if it has a valid expiration date.

// Add a method to ShoppingBag that calculates the average product price of products in your product list and prints out this value with the precision of three decimals.

// Add getMostExpensive method that finds the most expensive product and prints out its info.

// Add calculateTotalPrice method to ShoppingBag that calculates the total price of products in the shopping bag list.

// Create a constructor function with properties representing the following:

// PaymentCard - account balance (number with 2 decimal places), active or inactive status, valid until date

// Create checkoutAndBuy function which receives shopping bag and payment card and prints if the purchase is successful or not. Purchase is successful only if the amount on the card is greater or equal to the total price of products in the shopping bag. If there is not enough money, print out the amount that is missing to complete the purchase.

(function () {
  function randomId() {
    var id = Math.floor(Math.random() * 100000);
    return id;
  }

  function Product(name, price, expDate, id) {
    this.name = name;
    this.price = price;
    this.expirationDate = expDate;
    this.productId = id;
    this.getInfo = function () {
      return (
        this.name[0].toUpperCase() +
        this.name[name.length - 1].toUpperCase() +
        this.productId +
        ", " +
        this.name +
        ", " +
        this.price
      );
    };
  }

  function ShoppingBag() {
    this.product = [];
    this.addProduct = function (prod) {
      if (new Date() < prod.expirationDate) {
        this.product.push(prod);
      }
    };
    this.avgPrice = function () {
      var avgPrice = 0;
      for (var i = 0; i < this.product.length; i++) {
        var element = this.product[i];
        avgPrice += element.price;
      }
      return (
        "Average product price is: " +
        Math.round(avgPrice / this.product.length)
      );
    };
    this.mostExpensive = function () {
      var exp = -Infinity;
      var expName = "";
      for (var i = 0; i < this.product.length; i++) {
        var element = this.product[i];
        if (exp < element.price) {
          exp = element.price;
          expName = element.name;
        }
      }
      return "Most expensive product is " + expName + " and price is " + exp;
    };
    this.totalPrice = function () {
      var total = 0;
      for (var i = 0; i < this.product.length; i++) {
        var element = this.product[i];
        total += element.price;
      }
      return total;
    };
  }

  function PaymentCard(accBalance, status, validDate) {
    this.accBalance = accBalance;
    this.status = status;
    this.validDate = validDate;
  }
  function checkStatus(date) {
    if (new Date() < date) {
      return true;
    } else {
      return false;
    }
  }

  function checkoutAndBuy(bag, card) {
    if (card.accBalance > bag.totalPrice() && card.status) {
      return "Successful!";
    } else if (!card.status) {
      return "Card is not a valid!";
    } else {
      return (
        bag.totalPrice() -
        card.accBalance +
        "is missing to complete the purchase!"
      );
    }
  }

  var product1 = new Product(
    "Banana",
    139.99,
    new Date(2021, 7, 25),
    randomId()
  );
  var product2 = new Product("Apple", 50.99, new Date(2021, 8, 25), randomId());
  var product3 = new Product("Milk", 115.99, new Date(2021, 4, 25), randomId());
  var product4 = new Product("Fish", 320.99, new Date(2021, 9, 23), randomId());
  var product5 = new Product("Bread", 44.99, new Date(2021, 7, 16), randomId());

  var card = new PaymentCard(
    700.54,
    checkStatus(new Date(2022, 8, 5)),
    new Date(2022, 8, 5)
  );
  var card1 = new PaymentCard(
    400.54,
    checkStatus(new Date(2022, 8, 5)),
    new Date(2022, 8, 5)
  );
  var card2 = new PaymentCard(
    900.54,
    checkStatus(new Date(2021, 4, 5)),
    new Date(2021, 4, 5)
  );
//   console.log(card);
//   console.log(card1);
//   console.log(card2);

  //console.log(product2);
  var bag = new ShoppingBag();
  bag.addProduct(product1);
  bag.addProduct(product2);
  bag.addProduct(product3);
  bag.addProduct(product4);
  bag.addProduct(product5);
  console.log(bag);
  //console.log(bag.mostExpensive());
  //console.log(bag.totalPrice());
  //console.log(product1);
  //console.log(product1.getInfo());
  //console.log(randomId());

  console.log(checkoutAndBuy(bag, card));
  console.log(checkoutAndBuy(bag, card1));
  console.log(checkoutAndBuy(bag, card2));
})();
