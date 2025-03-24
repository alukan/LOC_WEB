function sum(a: number, b: number): number {
  if (a < 0 || b < 0) {
    throw new Error("No negative numbers");
  }

  return a + b;
}

export { sum };
