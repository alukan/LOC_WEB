// in a string, calculate how many times each word was met. Words sepparated by space.
// banana apple banana orange apple
// banana: 2
// apple: 2
// orange: 1

// string.split(string): array
// "banana apple banana orange apple".split(" ") => ["banana", "apple", "banana", "orange", "apple"]

let fruits = "banana apple banana orange apple";
const solve = (fruits) => {
  let fruitsArray = fruits.split(" ");
  let fruitObject = {};
  for (let i in fruitsArray) {
    let fruit = fruitsArray[i];
    if (!(fruit in fruitObject)) {
      fruitObject[fruit] = 0;
    }
    fruitObject[fruit] += 1;
  }
  return fruitObject;
};

console.log(solve(fruits));
