class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Programmer extends Person {
  constructor(name, progLanguage) {
    super(name);
    this.progLanguage = progLanguage;
  }
  sayHello(toWhom) {
    if (toWhom) {
      console.log(
        `Hello ${toWhom}, my name is ${this.name} and I know ${this.progLanguage}`
      );
    } else {
      console.log(
        `Hello, my name is ${this.name} and I know ${this.progLanguage}`
      );
    }
  }
}

function random_function(person) {
  console.log("I got a person" + person.name);
  person.sayHello();
}

const person = new Person("John");
const programmer = new Programmer("Jane", "JavaScript");

random_function(person);
random_function(programmer);

class ClassWithAge {
  constructor(age) {
    this.age = age;
  }
}

function printAge(obj) {
  console.log("after 10 years you will be " + (+obj.age + 10));
}

const age = new ClassWithAge(20);

printAge(age);

class NewClass extends ClassWithAge {
  constructor(age) {
    super("" + age);
  }
}
const newClass = new NewClass(20);

printAge(newClass);
