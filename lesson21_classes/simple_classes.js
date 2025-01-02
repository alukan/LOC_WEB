// let random_object = {
//     name: 'John',
//     sayHi: function() {
//         console.log('Hi, my name is ' + this.name);
//     },
// }

// const ran_func = (object)=>{
//     object.sayHi();
// }

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    if (age > 18) {
      this.isAdult = true;
    } else {
      this.isAdult = false;
    }
    if (age > 60) {
      console.log("Is an Elder");
    }

    if (age < 8) {
      throw Error("too young");
    }
  }

  sayHi() {
    console.log("Hi, my name is " + this.name);
  }
}

try {
  let person1 = new ClassName("Max", 5);

  person1.sayHi();
  console.log(person1);
} catch (error) {
  console.log(error.message);
}

module.exports = Person;
