interface Prototype {
  clone(): Prototype;
}

class User implements Prototype {
  constructor(
    public name: string,
    public age: number,
    private gender: string
  ) {}

  clone(): User {
    return new User(this.name, this.age, this.gender);
  }
}

const user1 = new User("John", 25, "male");
// const user2 = new User(user1.name, user1.age, user1.gender)
const user2 = user1.clone();

console.log(user2);
user1.age++;
console.log(user1.age);
console.log(user2.age);
