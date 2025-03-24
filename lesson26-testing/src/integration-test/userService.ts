import { UserRepository } from "./userRepository";
import { User } from "./user";

export class UserService {
  constructor(private userRepository: UserRepository) {}

  getUserName(id: number): string {
    const user = this.userRepository.findById(id);
    if (!user) throw new Error("User not found");
    return user.name;
  }

  rankOldestUsers() {
    const users = this.userRepository.findOldestUsers(2);
    const result = `The oldest guy here is ${users[0].name} and the second oldest is ${users[1].name}`;
    return result;
  }
}
