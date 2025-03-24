async function difference(a: number, b: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < b) {
        return reject("a cannot be larger than b");
      }
      return resolve(a - b);
    }, 1000);
  });
}

export { difference };
