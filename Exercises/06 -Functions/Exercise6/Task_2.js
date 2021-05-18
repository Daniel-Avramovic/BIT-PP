//Write a function that combines two arrays by alternatingly taking elements.
//[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3];

function combinesTwoArr(arr1, arr2) {
  var comb = [];
  for (var i = 0; i < arr1.length; i++) {
    comb[comb.length] = arr1[i];
    comb[comb.length] = arr2[i];
  }
  return comb;
}

console.log(combinesTwoArr(["a", "b", "c"], [1, 2, 3]));
