class Person {
  #bankAccount;
  #bankNumber;

  constructor(name, age, bankAcount, bankNumber) {
    this.name = name;
    this.age = age;
    this.#bankAccount = bankAcount;
    this.#bankNumber = bankNumber;
  }

  getBankNumber() {
    return this.#bankNumber.substr(0, 2) + "********";
  }

  withdrawMoney(amount) {
    this.#bankAccount -= amount;
    console.log("Withdrawing money... from bank acount");
  }
}

const person = new Person("Tilly", 21, 1000, "123456789");
person.withdrawMoney(200);
console.log(person.getBankNumber());
