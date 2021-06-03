var array = [300,1, 65, 7 ,9 ,2, 103];
//bubbleSort...
function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      var currentElement = arr[j];
      var next = arr[j + 1];

      if (currentElement > next) {
        arr[j] = next;
        arr[j + 1] = currentElement;
      }
    }
  }
  return arr;
}

var result = bubbleSort(array);
console.log(result);

//selectionSort....

function selectionSort(arr) {
  var temp;
  for (var j = 0; j < arr.length; j++) {
    var min = arr[j];
    var indexOfMin = j;

    for (var i = j; i < arr.length; i++) {
      var element = arr[i];
      if (element < min) {
        min = element;
        indexOfMin = i;
      }
    }
    temp = arr[j];
    arr[j] = min;
    arr[indexOfMin] = temp;
  }
  console.log(arr);
}

selectionSort(array);