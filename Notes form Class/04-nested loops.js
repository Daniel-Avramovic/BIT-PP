var res = '\n';
   for (var i = 0; i < 5; i++) {
       for (var j = 0; j < 5; j++) {
           res += '*\t';
       }
       res += '\n';
    }
console.log(res);

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

//1. i = 0, 0 < 3(true), currentElement = a[0]([1, 2, 1, 24]) =>
    //1. j = 0, 0 < 4(true), currentValue = currentElement[0](1), result = result + 1 + \tab, j++(1)
    //2. j = 1, 1 < 4(true), currentValue = currentElement[1](2), result = result + 2 + \tab, j++(2)
    //3. j = 2, 2 < 4(true), currentValue = currentElement[2](1), result = reault + 1 + \tab, j++(3)
    //4. j = 3, 3 < 4(true), currentValue = currnetElement[3](24), result = result + 24 + \tab, j++(4)
    //5. j = 4, 4 < 4(false),end;
//2. i = 1, 1 < 3(true), currentElement = a[1]([8, 11, 9, 4]) =>
    //1. j = 0, 0 < 4(true), currentValue = currentElement[0](8), result = result + 8 + \tab, j++(1)
    //2. j = 1, 1 < 4(true), currentValue = currentElement[1](11), result = result + 11 + \tab, j++(2)
    //3. j = 2, 2 < 4(true), currentValue = currentElement[2](9), result = reault + 9 + \tab, j++(3)
    //4. j = 3, 3 < 4(true), currentValue = currnetElement[3](4), result = result + 4 + \tab, j++(4)
    //5. j = 4, 4 < 4(false),end;
//3. i = 2, 2 < 3(true), currentElement = a[2]([7, 0, 7, 27]) =>
    //1. j = 0, 0 < 4(true), currentValue = currentElement[0](7), result = result + 7 + \tab, j++(1)
    //2. j = 1, 1 < 4(true), currentValue = currentElement[1](0), result = result + 0 + \tab, j++(2)
    //3. j = 2, 2 < 4(true), currentValue = currentElement[2](7), result = reault + 77 + \tab, j++(3)
    //4. j = 3, 3 < 4(true), currentValue = currnetElement[3](27), result = result + 27 + \tab, j++(4)
    //5. j = 4, 4 < 4(false),end;
// result = result + \new_line, i++(3);
//4. i = 3, 3 < 3(false),end;