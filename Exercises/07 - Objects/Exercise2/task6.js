// Write a function that adds string to the left or right of string, by replacing it’s characters.

// 	'0000', ‘123’, 'l' -> 0123 
// '00000000', ‘123’, 'r' -> 12300000

function addString(string1, string2, side) {
    var res = '';
    if(side === 'l'){
        res = string1.charAt(0) + string2;
    } else if(side === 'r'){
        res = string2+string1;
    }
    console.log(res);
};

addString('000', '123', 'r');
