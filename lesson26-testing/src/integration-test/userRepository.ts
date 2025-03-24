import { User } from "./user";

export class UserRepository {
  private users: User[] = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Max", age: 20 },
    { id: 4, name: "John", age: 35 },
  ];

  findById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  findOldestUsers(amountOfUsers: number): User[] {
    return this.users
      .sort((a, b) => b.age - a.age) // negative - 1st goes first, positive - 2nd goes first
      .slice(0, amountOfUsers);

    // option 1 - ['John', 'Bob']
    // option 2 - ['Bob', 'John']
  }
}
