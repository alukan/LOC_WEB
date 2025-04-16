interface Transport {
  deliver(): void;
}

interface TransportFactory {
  create(): Transport;
}

class Truck implements Transport {
  constructor(public name: string) {}
  deliver(): void {
    console.log("deliver by truck", this.name);
  }
}

class Boat implements Transport {
  constructor(public name: string) {}

  deliver(): void {
    console.log("deliver by boat", this.name);
  }
}

class TruckFactory implements TransportFactory {
  constructor(public name: string) {}
  create(): Truck {
    return new Truck(this.name);
  }
}

class BoatFactory implements TransportFactory {
  constructor(public name: string) {}
  create(): Boat {
    return new Boat(this.name);
  }
}

// Usage
function clientCode(factory: TransportFactory) {
  const transport = factory.create();
  console.log(
    "Client: I'm not aware of the creator's class, but it still works."
  );
  transport.deliver();
}

const truckFactory = new TruckFactory("Truck1");
const truckFactory2 = new TruckFactory("Truck2");
const boatFactory = new BoatFactory("Boat1");

clientCode(truckFactory);
clientCode(boatFactory);
clientCode(truckFactory2);
