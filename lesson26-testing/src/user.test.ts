import { User } from "./user";

test("testing Users", () => {
  const user1 = new User("Mike", 17, "testemail2@");
  const userMock1 = jest.spyOn(User, "getUserById").mockReturnValue(user1);
  expect(User.getUserAgeInMonths(0)).toBe(17 * 12);
  userMock1.mockRestore();
});

test("testing Users", () => {
  const user1 = new User("James", 16, "testemail@");
  jest.spyOn(User, "getUserById").mockReturnValue(user1);

  expect(User.getUserAgeInMonths(0)).toBe(16 * 12);
});

test("geting email domain", () => {
  const user1 = new User("Henry2", 25, "Henry@gmail.com");
  const userMock = jest.spyOn(User, "getUserById").mockReturnValue(user1);
  expect(User.getUserEmailDomain(5252)).toBe("gmail.com");

  expect(userMock).toHaveBeenCalled();
  expect(userMock).toHaveBeenCalledWith(5252);
  userMock.mockRestore();
  userMock.mockClear();
});

test("getting user by id", () => {
  const user1 = new User("Henry", 23, "testmail123@gmail.com");
  expect(User.getUserById(user1.id)).toBe(user1);
});
