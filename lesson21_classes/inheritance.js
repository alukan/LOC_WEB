const Person = require("./simple_classes");

class FootballPlayer extends Person {
  constructor(name, position) {
    super(name, 25);
    this.position = position;
    if (this.age == undefined) {
      this.age = 25;
    }
  }

  playFootball() {
    console.log("This is a foot ball player");
  }
  sayHi(toWhom) {
    console.log("Hello," + toWhom + " my name is " + this.name);
  }
}

let player1 = new FootballPlayer("Tim", 21);
player1.playFootball();
player1.sayHi("John");
// --------------------------------------------
class Driver extends Person {
  constructor(car, name, age) {
    super(name, age);
    this.car = car;
  }
  carDriver() {
    console.log("This is a driver");
  }
}

let driver1 = new Driver("Tesla", "bob", 31);
driver1.carDriver();

class TaxiDriver extends Driver {
  txiDriverFunc() {
    console.log("This is a taxi driver");
  }
}

let taxiDriver1 = new TaxiDriver("Toyota", "Hary", 65);
taxiDriver1.txiDriverFunc();
taxiDriver1.sayHi();
taxiDriver1.carDriver();

// Instance of class == object. They store data and methods
// Class is a schema (template) for creating objects (instances)
// when you use 'new' keyword, you create an instance of a class

// instance of a class - object that was created using a class
