//a. Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
// [
// {name: ‘apples’, price: 100},
// {name: ‘milk’, price: 80},
// {name:’bananas’, price: 150}
// ]
// b.Write a function that calculates the total price of your shopping list.
// c.Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals.
// d.Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase.

(function () {
  var favotiteProduct = [
    { name: "banana", price: 150.99 },
    { name: "Milk", price: 400.99 },
    { name: "Kiwi", price: 300.99 },
    { name: "Apples", price: 50.99 },
  ];

  const test = favotiteProduct.reduce((acc, item) => acc + item.price, 0);

  const nekiArr = [1,2,3,4];
  console.log(nekiArr.map(function(item) { return item * 2  }))

  function mapper (array, callbackfn){
    let newArray = [];
    for(let i = 0 ; i < array.length; i++){
      var newItem = callbackfn(array[i]);
      newArray.push(newItem)
    }
    return newArray;
  }

  console.log(test, 'test price')
  //b.
  var price = 0;
  function calcPrice(arr) {
    for (var i = 0; i < arr.length; i++) {
      var element = arr[i];
      price += element.price;
    }
    return 'Total price is: ' + price;
  }
  //c.
    var avgPrice = 0;
    function calcAvgPrice(arr){
      for (var i = 0; i < arr.length; i++) {
         var element = arr[i];
         avgPrice += element.price
        
      }
      return 'Average product price is: ' + Math.floor(avgPrice / arr.length);
    }
  //d.
  function mostExpensive(arr) {
    var most = arr[0].price;
    var res;
    for (var i = 0; i < arr.length; i++) {
      var element = arr[i];
      if (most < element.price) {
        most = element.price;
        res = element.name.toUpperCase();
      }
    }
    return 'Most expesnsive element is: ' + res;
  }
  console.log(calcPrice(favotiteProduct));
  console.log(mostExpensive(favotiteProduct));
  console.log(calcAvgPrice(favotiteProduct));
  
})();
