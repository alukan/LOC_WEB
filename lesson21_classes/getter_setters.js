class Car {
  #brand;
  #model;
  #year;

  constructor(brand, model, year) {
    this.#brand = brand;
    this.#model = model;
    this.#year = year;
  }

  getBrand() {
    return this.#brand;
  }
  setBrand(brand) {
    if (brand == "mercedes" || brand == "audi" || brand == "bmw") {
      this.#brand = brand;
    }
  }

  setYear(year) {
    if (typeof year === "number" && year > 1920) {
      this.#year = year;
    }
  }

  getYear() {
    return this.#year;
  }
}

let car = new Car("mercedes", "c200", 2020);

console.log(car.getBrand());

car.setBrand("bmw");

console.log(car.getBrand());

car.setYear(2019);
console.log(car.getYear());
