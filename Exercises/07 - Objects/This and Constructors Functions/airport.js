(function () {
  function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getData = function () {
      return this.name + " " + this.surname;
    };
  };
  //Modify Passenger’s getData method to return full category name “business” for “b” and “economy” for “e”.
  function Seat(number, category) {
    this.number = number || randomSeat();
    this.category = category || "e";
    this.getData = function () {
      if(this.category === 'e'){
        this.category = 'economy'
      } else if( this.category === 'b'){
        this.category = 'business';
      };
      var category = this.category;
      return this.number + ", " + category.toUpperCase();
    };
  }
  function randomSeat() {
    return Math.floor(Math.random() * (100 - 10) + 10);
  }
  // console.log(randomSeat());
  function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;
    this.getData = function () {
      return seat.getData() + ", " + person.getData();
    };
  }
  function Flight(relation, date) {
    this.relation = relation;
    this.date = date
    this.listOfPassengres = [];
    this.numOfBusiness = 0;
    this.addPassengrs = function (passenger) {
      if (this.listOfPassengres.length <= 100) {
        // this.listOfPassengres.push(this.check(passenger));
        if (this.checkNameSurname(passenger) !== -1) {
          this.listOfPassengres[this.checkNameSurname(passenger)] = passenger;
          if(passenger.seat.category !== 'b'){
            this.numOfBusiness--;
          }
        } else {
          this.listOfPassengres.push(this.check(passenger));
          if(passenger.seat.category === 'b'){
            this.numOfBusiness++;
          }
        }
      }
    };
    this.check = function (pass) {
      for (var i = 0; i < this.listOfPassengres.length; i++) {
        var a = this.listOfPassengres[i].seat.number;
        var b = pass.seat.number;
        if (a === b) {
          pass.seat.number = randomSeat();
        } else {
          pass.seat.number;
        }
      }
      return pass;
    };
    this.checkNameSurname = function (pass) {
      var check = 0;
      for (var i = 0; i < this.listOfPassengres.length; i++) {
        var name1 = this.listOfPassengres[i].person.name;
        var surname1 = this.listOfPassengres[i].person.surname;
        var name2 = pass.person.name;
        var surname2 = pass.person.surname;
        if (name1 === name2 && surname1 === surname2) {
          check = i;
          return check;
        }
      }
      return -1;
    };
    this.getData = function () {
      var month = this.date.getMonth();
      var day = this.date.getUTCDate();
      var year = this.date.getFullYear();
      var list = "";
      for (var i = 0; i < this.listOfPassengres.length; i++) {
        var get = this.listOfPassengres[i].getData() + "\n";
        list += "\t" + get;
      }
      return (
        month + "." + day + "." + year + ", " + this.relation + "\n " + list
      );
    };
    this.getDataModify = function () {
      var month = this.date.getMonth();
      var day = this.date.getUTCDate();
      var year = this.date.getFullYear();
      var name = this.relation.split(" - ");
      var nameResult =
        name[0][0].toUpperCase() +
        name[0][name.length - 1].toUpperCase() +
        " - " +
        name[1][0].toUpperCase() +
        name[1][name.length - 1].toUpperCase();

      return month + "." + day + "." + year + ", " + nameResult;
    };
  }

  // function checkNameAndSurname(array, pasenger) {
  //   for (var i = 1; i < array.length; i++) {
  //     var name1 = array[i].person.name;
  //     var surname1 = array[i].person.surname;
  //     var name2 = pasenger.person.name;
  //     var surname2 = pasenger.person.name;
  //     if (name1 === name2 && surname1 === surname2) {
  //       array[i] = pasenger;
  //     } else {
  //       array.push(pasenger);
  //     }
  //   }

  //   return array;
  // }
  //Airport: Nikola Tesla, total passengers: 4
  // 	25.10.2017, Belgrade - Paris
  //   1, B, John Snow
  //   2, E, Cersei Lannister
  // 11.11.2017, Barcelona - Belgrade
  //   3, E, Daenerys Targaryen
  //   4, E, Tyrion Lannister

  function Airport() {
    this.name = "Nikola Tesla";
    this.listOfFlghts = [];
    this.totalNumOfBusiness = 0;
    this.addFlight = function (fly) {
      this.listOfFlghts.push(fly);
      this.getData = function () {
        var countPasenger = 0;
        var list = "";
        for (var i = 0; i < this.listOfFlghts.length; i++) {
          var element = this.listOfFlghts[i];
          this.totalNumOfBusiness += element.numOfBusiness;
          countPasenger += element.listOfPassengres.length;
          list += element.getData();
          // for(var j = 0; j < element.listOfPassengres.length; j++){
          //   var get = element.listOfPassengres[j];
          //   list += '\t' + get.getData() + '\n';
          // }
        }
        // console.log(list);

        return (
          "Airport: " +
          this.name +
          ", total passengers: " +
          countPasenger +
          "\n" + 'Total number of business category passengers is ' + this.totalNumOfBusiness + '\n' + 
          list
        );
      };
    };
  }

  function createFilght(relation, date) {
    return new Flight(relation, date);
  }
  //Inside your immediately-invoking function, add createPassenger function that receives a first name, last name, seat number and category and returns a created Passenger.

  function createPassenger(fName, lName, seatNum, category) {
    var person = new Person(fName, lName);
    var seat = new Seat(seatNum, category);
    return new Passenger(person, seat);
  }

  // var person1 = new Person("John", "Snow");
  // var person2 = new Person("Maria", "Smith");
  // var person3 = new Person("Eva", "Broun");
  // var person4 = new Person("Johny", "Dep");
  // var seat1 = new Seat(1);
  // var seat2 = new Seat();
  // var seat3 = new Seat(3, "b");
  // var seat4 = new Seat(4, "b");
  // var passenger1 = new Passenger(person1, seat1);
  // var passenger2 = new Passenger(person2, seat2);
  // var passenger3 = new Passenger(person3, seat3);
  // var passenger4 = new Passenger(person4, seat4);
  var passenger1 = createPassenger("John", "Snow", 1, 'b');
  var passenger2 = createPassenger("Maria", "Smith");
  var passenger3 = createPassenger("Eva", "Broun", 4, 'b');
  var passenger4 = createPassenger("Johny", "Dep", 5, "b");
  var passenger5 = createPassenger("Eva", "Broun", 5, "b");
  var passenger6 = createPassenger("Johny", "Dep", 6, "b");
  var passenger7 = createPassenger("Johny", "Dep", 8, "e");

  var flight1 = createFilght("Belgrade - Paris", new Date(2021, 7, 24));
  var flight2 = createFilght("Barselona - Belgrade", new Date(2021, 9, 20));
  var NikolaTesla = new Airport();

  flight1.addPassengrs(passenger1);
  flight1.addPassengrs(passenger2);
  flight2.addPassengrs(passenger3);
  flight2.addPassengrs(passenger4);
  flight2.addPassengrs(passenger5);
  flight2.addPassengrs(passenger6);
  flight2.addPassengrs(passenger7);
  // console.log(flight2.getData());
  NikolaTesla.addFlight(flight1);
  NikolaTesla.addFlight(flight2);
  // console.log(NikolaTesla.getData());
  // console.log(person1.getData());
  // console.log(seat2.getData());
  // console.log(flight2.listOfPassengres[0].person.name);
  console.log(NikolaTesla.getData());
  // console.log(flight2.listOfPassengres[2].seat.number);
  // console.log(flight2.listOfPassengres[3].seat.number);
  // console.log(flight2.listOfPassengres[4].seat.number);
})();
