import { Student } from "./student";

test("student test", () => {
  const student1 = new Student("Jane", 15, 10);
  student1.inFiveYears();
  expect(student1.age).toBe(20);
  expect(student1.isAdult).toBe(true);
});

test("student creation test", () => {
  const student1 = new Student("Jane", 15, 10);
  expect(student1.isAdult).toBe(false);
});
