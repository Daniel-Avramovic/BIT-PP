//Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
function combinations(){
    var possibleCombination = '';
    for(var i = 1; i < 8; i++){
        var currentRes = '';
        for(var j = 1; j < 8; j++){
            if(i !== j){
                currentRes += i +','+ j + '\n';
            }
        }
        possibleCombination += currentRes;
    }
    return possibleCombination;
}

console.log(combinations());