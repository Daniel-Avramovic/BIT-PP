"use strict";

// Bookmaker’s

// In your IDE of choice, create a new JavaScript file named booking-house.js and make it so that all code written in the file follows JS strict mode.

// Create an anonymous immediately-invoking function that will hold main execution of all program calls. Make sure that functions that you write in this function are pure functions.

// Create constructor functions with properties representing the following:
// Country - name, odds, continent (EU, AS, AF, SA, NA, AU)
// Person - name, surname, date of birth
// Player - person, bet amount, country (instance of Country)
// Address - country, city, postal code, street and number
// BettingPlace - address and list of players (initially empty)
// BettingHouse - competition, list of betting places (initially empty) and number of players

// Create continents as constants (objects that can not change). So, when passing a continent as a parameter, you should pass Continent.ASIA.

// Add a method to Person that returns a formatted string containing the name, surname and date of birth of the person (date of birth in dd.mm.yy format).

// Add a method to Address that returns a formatted string like the following one:
// 	Nemanjina 4, 11000 Beograd, SR

// Add a method to Player that returns a formatted string containing a country, expected win amount (odds * bet amount) and person data.
// SR, 1050.00 eur, Pera Peric, 29 years

// Add a method to BettingPlace that returns a formatted string containing a street (without a number), postal code and city, and sum of all bet amounts of that place.
// Nemanjina, 11000 Belgrade, sum of all bets: 50000eur

// Add a method to BettingPlace that adds a player to the players list of a betting place.

// Inside your immediately-invoking function, add a function that returns a created Player.

// Inside your immediately-invoking function, add a function that creates a BettingPlace.

// Create an instance of the BettingHouse that receives the name of competition.

// Create four players with random data. Create two betting places. Add created players as you wish to Betting places. Add betting places to the betting house.

// Display all betting house data in the following manner:

// Football World Cup Winner, 2 betting places, 4 bets
// 	Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
// 		SR, 1050.00 eur, Pera Peric, 29 years
// 		SR, 1050.00 eur, Pera Peric, 29 years
// Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
// 		GR, 1050.00 eur, Pera Peric, 29 years
// 		SR, 1050.00 eur, Pera Peric, 29 years
// There are 3 bets on Serbia// u metodi beting place da se napravi

// Create continents as constants (objects that can not change). So, when passing a continent as a parameter, you should pass Continent.ASIA.
(function () {
  var CONTINENT = {
    ASIA: "AS",
    EUROPE: "EU",
    NORTH_AMERICA: "NA",
    SOUTH_AMERICA: "SA",
    AUSTRALIA: "AU",
    AFRICA: "AF",
  };
  function Country(name, odds, continent) {
    this.name = name;
    this.odds = odds;
    this.continent = continent;
    this.getFormatedName = function () {
      var formatted = this.name[0];
      for (var i = 1; i < this.name.length; i++) {
        var current = this.name[i];

        switch (current) {
          case "a":
          case "e":
          case "i":
          case "o":
          case "u":
          case "A":
          case "E":
          case "I":
          case "O":
          case "U":
            continue;
        }
        formatted += current;
        break;
      }
      return formatted;
    };
  }
  function Person(name, surname, dateOfBirth) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
    this.getInfo = function () {
      return (
        this.name +
        " " +
        this.surname +
        ", " +
        (2021 - this.dateOfBirth.year) +
        " year"
      );
    };
  }
  function Date(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  function Address(country, city, postalCode, street, streetNumber) {
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.streetNumber = streetNumber;
    this.formattedString = function () {
      return (
        this.street +
        " " +
        this.streetNumber +
        ", " +
        postalCode +
        " " +
        this.city +
        " " +
        this.country.getFormatedName() +
        "."
      );
    };
  }
  function Player(person, betAmount, country) {
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;
    this.getBetInfo = function () {
      return (
        this.country.getFormatedName() +
        ", " +
        this.betAmount * this.country.odds +
        " eur," +
        this.person.getInfo()
      );
    };
  }
  function BettingPlace(address) {
    this.address = address;
    this.listOfPlayers = [];
    this.addPlayer = function(player){
      this.listOfPlayers[this.listOfPlayers.length] = player;
    }
    this.addBetAmount = function(){
      var sum = 0;
      for (var i = 0; i < this.listOfPlayers.length; i++) {
          var player = this.listOfPlayers[i];
          sum += player.betAmount;
      }
      return sum;
    }
    // Nemanjina, 11000 Belgrade, sum of all bets: 50000eur
    this.formattedBettingPlace = function () {
      return (
        this.address.street +
        ", " +
        this.address.postalCode +
        " " +
        this.address.city +
        ", sum of all bets:" +
        this.addBetAmount() + " eur"
      );
    };
  }

  //Football World Cup Winner, 2 betting places, 4 bets
  function BettingHouse(competition, listOfBettingPlaces) {
    this.competition = competition;
    this.listOfBettingPlaces = listOfBettingPlaces;
    this.numOfBetPlace = function (listOfBettingPlaces) {
      var counter = 0;
      for (var i = 0; i < listOfBettingPlaces.length; i++) {
        counter++;
      }
      return counter;
    };
    this.numOfBet = function(bet){
      var counter = 0;
      for (var i = 0; i < bet.length; i++) {
        counter++;
      }
      return counter;
    }
    this.getFormated = function(){
      return (competition + ', ' + this.numOfBetPlace(listOfBettingPlaces) + ' betting places, ' + this.numOfBet([player.betAmount, player1.betAmount]) + ' bets')                                                    //ne valja ovo----
    }
  }

  // Inside your immediately-invoking function, add a function that returns a created Player.

  function createPlayer(player) {
    return player;
  }

  // Inside your immediately-invoking function, add a function that creates a BettingPlace.

  function createBettingPlace(place) {
    return place;
  }

  var serbia = new Country("Serbia", 5, CONTINENT.EUROPE);

  var daniel = new Person("Daniel", "Avramovic", new Date(17, 5, 1991));
  var ivan = new Person("Ivan", "Balic", new Date(8, 2, 1991));
  var player = new Player(daniel, 100, serbia);
  var player1 = new Player(ivan, 200, serbia);

  var address = new Address(serbia, "Belgrade", 11000, "Nemanjina", 6);
  var address1 = new Address(serbia, "S.Palanka", 11420, "Dimitrija Tucovica", 10);
  // console.log(address.formattedString());

  var place = new BettingPlace(address);
  place.addPlayer(player);
  place.addPlayer(player1);
  // console.log(place.formattedBettingPlace());

  var place1 = new BettingPlace(address1);
  place1.addPlayer(player);
  place1.addPlayer(player1);
  // console.log(place1.formattedBettingPlace());
  

  var createPlayers = createPlayer(player);
  // console.log(createPlayers);

  var createPlace = createBettingPlace(place);
  // console.log(createPlace.formattedBettingPlace());

  var mozzart = new BettingHouse("Serbia League", [
    place.address,
    place1.address,
  ]);
  console.log(mozzart.getFormated());
  // console.log(mozzart.getFormated());
  // console.log(place.formattedBettingPlace());
  // console.log(player.getBetInfo());
  // console.log(player1.getBetInfo());
  // console.log(place1.formattedBettingPlace());
  // console.log(player.getBetInfo());
  // console.log(player1.getBetInfo());

  // var playerList = place.addPlayerList([daniel.getInfo(), ivan.getInfo()]); //pitati da li moze ovako
  // console.log(playerList);
  // console.log(address.formattedString());
  // console.log(place.formattedBettingPlace());
})();

// function Person(name, surname, dateOfBirth){
//     this.name = name;
//     this.surname = surname;
//     this.dateOfBirth = dateOfBirth;

// };
// var person = new Person('Pera','Peric', );

// console.log(person);
