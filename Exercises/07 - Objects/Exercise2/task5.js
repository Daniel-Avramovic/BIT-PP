// Write a function to convert a string to its abbreviated form. 

// 	"John Snow" -> 	"John S."

(function(){
    function convert(string){
        var str = string.split(' ');
        var str1 = str[1].charAt(0);
        var newArr = [];
        newArr.push(str[0]);
        newArr.push(str1);
        return newArr.join(' ') + '.';
    }
    console.log(convert('John Snow'))
})()