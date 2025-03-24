import { difference } from "./async-test";

test("testing difference", async () => {
  await expect(difference(8, 5)).resolves.toBe(3);
  await expect(difference(5, 8)).rejects.toBe("a cannot be larger than b");
});
