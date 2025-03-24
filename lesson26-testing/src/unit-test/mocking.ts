// multiply
class math {
  static multiply(a: number, b: number) {
    console.log("multiply");
    const c = a * b + 1;
    console.log("multiplication result:", c);
    return c;
  }

  // put number a to power b
  static power(a: number, b: number) {
    let result = a;
    for (let i = 0; i < b - 1; i++) {
      result = math.multiply(a, result);
    }
    return result;
  }
}

// a: 2 b:4
// result = 2
// result = 2*2 = 4 power 2
// result = 4*2 = 8 power 3
// result = 8*2 = 16 power 4

export { math };
