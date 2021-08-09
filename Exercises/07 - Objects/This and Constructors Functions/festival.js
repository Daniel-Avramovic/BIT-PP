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
      const month = this.date.getMonth();
      const day = this.date.getUTCDate();
      const year = this.date.getFullYear();
      let list = "";
      let duration = 0;
      for (let i = 0; i < this.listOfMovies.length; i++) {
        let element = this.listOfMovies[i];
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
      let dur = 0;
      for (let i = 0; i < this.listOfMovies.length; i++) {
        let element = this.listOfMovies[i];
        dur += element.length;
      }
      return dur;
    };
    this.calcSameGengre = function () {
      let counter = 0;
      for (let i = 0; i < this.listOfMovies.length; i++) {
        let element = this.listOfMovies[i].genre.name;
        let tempCout = 0;
        for (let i = 0; i < this.listOfMovies.length; i++) {
          let element1 = this.listOfMovies[i].genre.name;
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
      let counter = 0;
      let name = "";
      for (let i = 0; i < this.listOfMovies.length; i++) {
        let element = this.listOfMovies[i].genre.name;
        let tempCout = 0;
        let tempName = "";
        for (let i = 0; i < this.listOfMovies.length; i++) {
          let element1 = this.listOfMovies[i].genre.name;
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
      let list = "";
      for (let i = 0; i < this.listOfPrograms.length; i++) {
        let element = this.listOfPrograms[i];
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
  const movie1 = createMovie("FastAndFourious", "action", 90);
  const movie2 = createMovie("FastAndFourious2", "drama", 140);
  const movie3 = createMovie("FastAndFourious3", "drama", 170);
  const movie4 = createMovie("Thor", "horor", 140);
  const movie5 = createMovie("Avengers", "action", 130);
  const movie6 = createMovie("Avengers2", "action", 130);
  const program1 = createProgram(new Date(2021, 7, 24));
  const program2 = createProgram(new Date(2021, 7, 28));
  const festival = new Festival("Summer Festival", 10);
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
