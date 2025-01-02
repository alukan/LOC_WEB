// count how many times each letter appears in the string
str = "banana";
// b = 1 a = 3 n = 2
function Solve(str) {
  // letter : how many times it appears
  // var - no
  // object -
  // array - kinda ~ not so easy
  // arr = [b, a, a, a, n, n]
  // const obj = {
  //     b:1,
  //     a:3,
  // }

  const letters = {};
  //for(let i=0; i<str.length; i++)
  for (let i in str) {
    let letter = str[i];
    if (!(letter in letters)) {
      letters[letter] = 1;
    } else {
      letters[letter] += 1;
    }
  }
  return letters;
}

console.log(Solve(str));

// pick a letter from left
// check if we counted
// count how many times it appears in the string
// go through the word
// count each letter that is the same as the one we picked

// print
