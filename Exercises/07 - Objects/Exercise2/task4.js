// Write a function to split a string and convert it into an array of words.

// 	"John Snow" -> [ 'John', 'Snow' ]


(function(){
    function splitStr(string){
        return string.split(' ')
    }
    console.log(splitStr('John Snow'));
})()