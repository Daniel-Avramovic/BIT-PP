// Write a function that calculates a number of days to your birthday.
// Input: 25 February
// Output: 5 days

// today=new Date();
// var bDay=new Date(today.getFullYear(), 4, 17);
// if (today.getMonth()==4 && today.getDate()>17) 
// {
// bDay.setFullYear(bDay.getFullYear()+1); 
// }  
// var one_day=1000*60*60*24;
// console.log(Math.ceil((bDay.getTime()-today.getTime())/(one_day))+
// " days left until my birth day");

(function(){
    var today = new Date();
    var bDay = new Date(today.getFullYear() + 1, 4, 18);
    var oneDay = 1000*60*60*24;
    // console.log(bDay, today);
    function calcDayToBirthday(now, birthday){
        var birth = (birthday - now)/oneDay;
        
        return Math.floor(birth);
    }
    console.log('For ' + calcDayToBirthday(today, bDay) + ' days is my birhday!');
})()