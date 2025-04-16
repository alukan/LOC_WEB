class Singleton {
  static instance: Singleton | null = null;
  counter: number = 0;
  supportEmail: string = "support@discord.gg";

  private constructor() {}

  static getInstance(): Singleton {
    // Check if an instance already exists, if so return instance, if not use new Sigleton()
    if (Singleton.instance) {
      return Singleton.instance;
    } else {
      Singleton.instance = new Singleton();
      return Singleton.instance;
    }
  }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1.counter); // 0
console.log(instance2.counter); // 0
instance1.counter++;
console.log(instance1.counter); // 1
console.log(instance2.counter); // 1
const instance3 = Singleton.getInstance();
console.log(instance3.counter); // 1

console.log(instance1.supportEmail);
