class User {
  readonly name: string;
  age: number;
  readonly email: string;
  readonly id: number;
  private static currentId: number = 0;
  private static users: User[] = [];

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.id = User.currentId++;
    User.users.push(this);
  }

  static getUserById(id: number): User | undefined {
    for (let i in User.users) {
      if (id == User.users[i].id) {
        return User.users[i];
      }
    }
  }

  static getUserAgeInMonths(id: number): number | undefined {
    const user = User.getUserById(id);
    if (!user) {
      return;
    }
    return user.age * 12;
  }

  static getUserEmailDomain(id: number): string | undefined {
    const user = User.getUserById(id);
    if (!user) {
      return;
    }

    return user.email.split("@")[1];
  }
}

export { User };
// Static: User.amountOfUsers

// usual: user = new User()
// user.name

// this.id = User.currentId++;
// this.id = User.currentId;
// User.currentId+=1;

// this.id = ++User.currentId;
// User.currentId+=1;
// this.id = User.currentId;
