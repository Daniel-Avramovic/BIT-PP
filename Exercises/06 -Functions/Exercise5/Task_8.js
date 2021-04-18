//Input:  Belgrade Institute of Technology
//Output: ygolonhceT fo etutitsnI edargleB

function reversed(string){
    var output = '';
    for(var i = string.length - 1; i >= 0; i--){
        output += string[i];
    }
    return output;
}

console.log(reversed("Belgrade Institute of Technology"));