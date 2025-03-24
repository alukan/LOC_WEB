import { User } from "./user";
import { UserRepository } from "./userRepository";
import { UserService } from "./userService";

let userRep: UserRepository;
let userService: UserService;

beforeEach(() => {
  userRep = new UserRepository();
  userService = new UserService(userRep);
});

test("get user name test", () => {
  expect(userService.getUserName(1)).toBe("Alice");
});

test("Integration rank oldest user test", () => {
  const expected = `The oldest guy here is John and the second oldest is Bob`;
  expect(userService.rankOldestUsers()).toBe(expected);
});

test("findOldestUsers test", () => {
  const userRep = new UserRepository();

  const res = userRep.findOldestUsers(3);
  expect(res[2].name).toBe("Alice");
  expect(res[1].name).toBe("Bob");
  expect(res[0].name).toBe("John");
});

test("rankOldestUsers test", () => {
  const usersToReturn = [
    { id: 4, name: "John", age: 35 },
    { id: 2, name: "Bob", age: 30 },
  ];
  jest.spyOn(userRep, "findOldestUsers").mockReturnValue(usersToReturn);

  expect(userService.rankOldestUsers()).toBe(
    `The oldest guy here is ${usersToReturn[0].name} and the second oldest is ${usersToReturn[1].name}`
  );
});
