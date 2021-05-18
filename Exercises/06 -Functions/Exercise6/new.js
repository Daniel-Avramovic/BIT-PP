function printListOfStrings(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (i === 0) {
      newArr[newArr.length] = "*";
      newArr[newArr.length] = array[i];
    } else if (i === array.length - 1) {
      newArr[newArr.length] = array[i];
      newArr[newArr.length] = "*";
    } else {
      newArr[newArr.length] = array[i];
    }
  }
  //   console.log(newArr);
  var result = "";
  var indexlength = 0;
  var counterlength = 0;
  for (var i = 0; i < newArr.length; i++) {
    var currentString = newArr[i];
    var tempCount = 0;
    var tempIndex;
    for (var j = 0; j < currentString.length; j++) {
      tempCount++;
      tempIndex = i;
      //   console.log(tempCount);
    }
    if (counterlength < tempCount) {
      counterlength = tempCount;
      indexlength = tempIndex;
    }
  }
  for (var i = 0; i < newArr.length; i++) {
    var currentString = newArr[i];
    var res = "\n";

    for (var j = 0; j <= counterlength; j++) {
      if (j === 0 || j === counterlength) {
        res += "*";
      }
      if (i === 0|| i === newArr.length - 1) {
        res += "*";
      } else if (currentString[j] === undefined) {
        res += " ";
      } else {
        res += currentString[j];
      }
    }
    result += res;
  }
  console.log(result);
  //   console.log(indexlength, counterlength);
}
printListOfStrings(["Hello", "World", "in", "a", "frame"]);
