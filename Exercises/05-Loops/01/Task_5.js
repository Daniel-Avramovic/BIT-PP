//5. Write a program that prints the elements of the following array.
var a = [[1, 2, 1, 24], 
        [8, 11, 9, 4], 
        [7, 0, 7, 27]];
var result = '';
  for(var i = 0; i < a.length; i++) {
      var currentElement = a[i];
        for(var j = 0; j < currentElement.length; j++) {
            var currentValue = currentElement[j];
            result = result + currentValue + '\t';
        }
        result = result + '\n';
  }  
  console.log(result);