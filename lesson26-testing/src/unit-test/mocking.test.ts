import { math } from "./mocking";

test("power of", () => {
  jest
    .spyOn(math, "multiply")
    .mockImplementation((a: number, b: number) => a * b);
  expect(math.power(3, 3)).toBe(27);
});
