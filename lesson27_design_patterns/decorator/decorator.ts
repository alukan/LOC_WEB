interface Coffee {
  getCost(): number;
  getDescription(): string;
}

class SimpleCoffee implements Coffee {
  getCost() {
    return 2;
  }
  getDescription() {
    return "simple coffee";
  }
}

class Cappuccino implements Coffee {
  getCost() {
    return 3;
  }
  getDescription() {
    return "Cappuccino";
  }
}

class Latte implements Coffee {
  getCost() {
    return 2.5;
  }

  getDescription() {
    return "Latte";
  }
}

class CofeeDecorator implements Coffee {
  coffee: Coffee;
  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  getCost() {
    return this.coffee.getCost();
  }
  getDescription() {
    return this.coffee.getDescription();
  }
}

class MilkDecorator extends CofeeDecorator {
  getCost() {
    return super.getCost() + 1;
  }
  getDescription() {
    return super.getDescription() + "with milk";
  }
}

class SugarDecorator extends CofeeDecorator {
  getCost() {
    return super.getCost() + 0.75;
  }
  getDescription() {
    return super.getDescription() + "with Sugar";
  }
}

class CreamDecorator extends CofeeDecorator {
  getCost() {
    return super.getCost() + 0.5;
  }
  getDescription() {
    return super.getDescription() + "with Cream";
  }
}

const coffee = new SimpleCoffee();

console.log(coffee.getDescription(), "=>", `$${coffee.getCost()}`);

let milkCoffee = new MilkDecorator(coffee);

console.log(milkCoffee.getDescription(), "=>", `$${milkCoffee.getCost()}`);

const sugarCoffee = new SugarDecorator(milkCoffee);

console.log(sugarCoffee.getDescription(), "=>", `$${sugarCoffee.getCost()}`);

milkCoffee = new CreamDecorator(milkCoffee);

console.log(milkCoffee.getDescription(), "=>", `$${milkCoffee.getCost()}`);

// let cappuccino = new Cappuccino();

// cappuccino = new SugarDecorator(cappuccino);

// cappuccino = new MilkDecorator(cappuccino);

const cappuccino = new Cappuccino();

const sugarCappuccino = new SugarDecorator(cappuccino);

const sugarMilkCappuccino = new MilkDecorator(sugarCappuccino);
