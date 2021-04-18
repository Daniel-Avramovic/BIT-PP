//Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
//Input:   [ 3,  500, -10, 149, 53,   414, 1,    19 ]
//Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

function dividing(array){
    var newArr = [];
    for(var i = 0; i < array.length;i++) {
        if(array[i] /2 + 5 === 0){
            newArr[newArr.length] = 20;
        } else{
            newArr[newArr.length] = array[i] / 2 + 5;
        }
    }
    return newArr;
}

console.log(dividing([ 3,  500, -10, 149, 53,   414, 1,    19 ]))
