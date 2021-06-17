(function () {
  function Genre(name) {
    this.name = name;
    this.getData = function () {
      var formated = "";
      formated = name[0].toUpperCase() + name[name.length - 1].toUpperCase();
      return formated;
    };
  }
  function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
    this.getData = function () {
      return this.title + ", " + this.length + "min, " + this.genre.getData();
    };
  }
  function Program(date) {
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
    this.getData = function () {
      var month = this.date.getMonth();
      var day = this.date.getUTCDate();
      var year = this.date.getFullYear();
      var list = "";
      var duration = 0;
      for (var i = 0; i < this.listOfMovies.length; i++) {
        var element = this.listOfMovies[i];
        list += "\t\t" + element.getData() + "\n";
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
        "\n" +
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
  }

  function Festival(name, maxNumberOfMovies) {
    this.name = name;
    this.maxNumberOfMovies = checkValid(maxNumberOfMovies);
    this.listOfPrograms = [];
    this.totalNumberOfAllMovies = 0;
    this.addProgram = function (program) {
      this.listOfPrograms.push(program);
      this.totalNumberOfAllMovies += program.totalNumberOfMovies;
    };
    this.getData = function () {
      var list = "";
      for (var i = 0; i < this.listOfPrograms.length; i++) {
        var element = this.listOfPrograms[i];
        list += "\t" + element.getData();
      }
      if (this.listOfPrograms == 0) {
        return "Weekend festival" + "\n\t" + " Program to be announced";
      } else {
        return (
          this.name +
          " has " +
          this.totalNumberOfAllMovies +
          " movie titles" +
          "\n" +
          list
        );
      }
    };
  }
  function checkValid(a) {
    if (typeof a !== "number") {
      throw new Error("Error, invalid input for max number of movies!!!");
    } else {
      return a;
    }
  }
  function createMovie(title, genre, length) {
    function checkValid(a) {
      if (typeof a !== "number") {
        throw new Error(
          "Error, invalid input length for " + title + " movie!!!"
        );
      } else {
        return a;
      }
    }

    var genre = new Genre(genre);
    return new Movie(title, genre, checkValid(length));
  }
  function createProgram(date) {
    return new Program(date);
  }
  var movie1 = createMovie("FastAndFourious", "action", 90);
  var movie2 = createMovie("FastAndFourious2", "drama", 140);
  var movie3 = createMovie("FastAndFourious3", "drama", 170);
  var movie4 = createMovie("Thor", "horor", 140);
  var movie5 = createMovie("Avengers", "action", 130);
  var movie6 = createMovie("Avengers2", "action", 130);
  var program1 = createProgram(new Date(2021, 7, 24));
  var program2 = createProgram(new Date(2021, 7, 28));
  var festival = new Festival("Summer Festival", 10);
  program1.addMovie(movie1);
  program1.addMovie(movie2);
  program1.addMovie(movie3);
  program2.addMovie(movie6);
  program2.addMovie(movie4);
  program2.addMovie(movie5);
  festival.addProgram(program1);
  festival.addProgram(program2);
  // console.log(movie1.genre.name);
  // console.log(program1.nameSameGengre());
  // console.log(program1.nameSameGengre());
  //   console.log(festival);
  console.log(festival.getData());
})();
