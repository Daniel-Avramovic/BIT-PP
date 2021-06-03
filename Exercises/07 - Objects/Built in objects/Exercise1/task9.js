// Write a function that for a given departure and arrival time calculates the time the trip takes.
// Input: 8:22:13 11:43:22
// Output: 3 hours 21 minutes 9 seconds

(function () {
  //   var now = new Date(2021, 4, 31, 11, 44, 13);
  //   var fly = new Date(2021, 4, 31, 11, 43, 22);

  var now = new Date();
  var fly = new Date(2021, 4, 31, 20, 30, 0);
  function timeToFly(now, fly) {
    var hours;
    var minutes;
    var seconds;
    hours = fly.getHours() - now.getHours();

    if (fly.getMinutes() < now.getMinutes()) {
      if (fly.getHours() > now.getHours()) {
        hours = fly.getHours() - now.getHours() - 1;
      } else {
        hours = fly.getHours() - now.getHours();
      }

      minutes = fly.getMinutes() + 60 - now.getMinutes();
    } else {
      minutes = fly.getMinutes() - now.getMinutes();
    }
    if (fly.getSeconds() < now.getSeconds()) {
      minutes = fly.getMinutes() - now.getMinutes() - 1;
      seconds = fly.getSeconds() + 60 - now.getSeconds();
    } else {
      seconds = fly.getSeconds() - now.getSeconds();
    }
    return hours + ":" + minutes + ":" + seconds;
  }
  console.log(timeToFly(now, fly));
})();
