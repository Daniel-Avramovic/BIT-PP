function Genre(name) {
  this.genre = name;
}
Genre.prototype.getData = function () {
  var formated = "";
  formated =
    this.genre[0].toUpperCase() +
    this.genre[this.genre.length - 1].toUpperCase();
  return formated;
};

function Movie(title, genre, length) {
  this.title = title;
  this.genre = genre;
  this.length = length;
  this.getData = function () {
    return this.title + ", " + this.length + "min, " + this.genre.getData();
  };
}
Movie.prototype.getData = function () {
  return this.title + ", " + this.length + "min, " + this.genre.getData();
};

function createMovie(title, genre, length) {
  function checkValid(a) {
    if (typeof a != "number") {
      throw new Error("Error, invalid input length for " + title + " movie!!!");
    } else {
      return a;
    };
  };

  var genre = new Genre(genre);
  return new Movie(title, genre, checkValid(length));
};

function Program(date) {
    this.id = randomId();
    this.date = date;
    this.listOfMovies = [];
    this.totalNumberOfMovies = 0;
    this.addMovie = function (movie) {
      if (this.calcDuration() + movie.length <= 480) {
        if (
          this.calcSameGengre() > 3 &&
          this.nameSameGengre() === movie.genre.name
        ) {
          console.log(
            "The program is filled with films of " +
              movie.genre.name +
              " genre, already has " +
              this.calcSameGengre() +
              " films!!!"
          );
        } else {
          this.listOfMovies.push(movie);
          this.totalNumberOfMovies++;
        }
      }
    };
    // this.getData = function () {
    //   var month = this.date.getMonth() + 1;
    //   var day = this.date.getUTCDate();
    //   var year = this.date.getFullYear();
    //   var list = "";
    //   var duration = 0;
    //   for (var i = 0; i < this.listOfMovies.length; i++) {
    //     var element = this.listOfMovies[i];
    //     // list += "\t\t" + element.getData() + "\n";
    //     duration += element.length;
    //   }
    //   return (
    //     day +
    //     "." +
    //     month +
    //     "." +
    //     year +
    //     ", program duration " +
    //     duration +
    //     "min" +
    //     "\n"+ '<br>' +
    //     this.totalNumberOfMovies + 'Movies'
    //   );
    // };
    this.getData = function () {
      var month = this.date.getMonth() + 1;
      var day = this.date.getUTCDate() + 1;
      var year = this.date.getFullYear();
      var list = "";
      var duration = 0;
      for (var i = 0; i < this.listOfMovies.length; i++) {
        var element = this.listOfMovies[i];
        list += "\t\t" + element.getData() + "\n" + '<br>';
        duration += element.length;
      }
      return (
        day +
        "." +
        month +
        "." +
        year +
        ", program duration " +
        duration +
        "min" +
        "\n" + '<br>' +
        list
        );
      };
    this.calcDuration = function () {
      var dur = 0;
      for (var i = 0; i < this.listOfMovies.length; i++) {
        var element = this.listOfMovies[i];
        dur += element.length;
      }
      return dur;
    };
    this.calcSameGengre = function () {
      var counter = 0;
      for (var i = 0; i < this.listOfMovies.length; i++) {
        var element = this.listOfMovies[i].genre.name;
        var tempCout = 0;
        for (var i = 0; i < this.listOfMovies.length; i++) {
          var element1 = this.listOfMovies[i].genre.name;
          if (element === element1) {
            tempCout++;
          }
        }
        if (counter < tempCout) {
          counter = tempCout;
        }
      }
      return counter;
    };
    this.nameSameGengre = function () {
      var counter = 0;
      var name = "";
      for (var i = 0; i < this.listOfMovies.length; i++) {
        var element = this.listOfMovies[i].genre.name;
        var tempCout = 0;
        var tempName = "";
        for (var i = 0; i < this.listOfMovies.length; i++) {
          var element1 = this.listOfMovies[i].genre.name;
          if (element === element1) {
            tempCout++;
            tempName = element1;
          }
        }
        if (counter < tempCout) {
          counter = tempCout;
          name = tempName;
        }
        return name;
      }
    };
  };
  function randomId(){
    return Math.floor(Math.random() * 10000);
}
//   var movie1 = createMovie("FastAndFourious", "action", 90);
//   var movie2 = createMovie("FastAndFourious2", "drama", 140);
//   var program1 = new Program(new Date(2021, 7, 24));
//   program1.addMovie(movie1);
//   program1.addMovie(movie2);
//   console.log(program1.getData())