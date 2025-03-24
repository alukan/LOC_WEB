import { sum } from "./sum";

test("test sum 1,2", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(4, 8)).toBe(12);
});

test("test2", () => {
  expect(sum(12, 12)).toBe(24);
});

test("errorTesting", () => {
  expect(() => {
    sum(-4, 2);
  }).toThrow("No negative numbers");
});
