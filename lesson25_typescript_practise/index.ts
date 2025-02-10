// we have some array of numbers and string and we need to create function
//  that will take array and replace strings with number 0
const array = [1, 2, 3, "fdsf", "apple", 2, "0"];

// (string | number)[]; [1,"fdsf"]
// string[] | number[]; [1,2,3,] ["fldsfj"]
// string | number[]; "dslkfjk" [1,2,3]
// (string[] | number[])[]; [["jhfkgj"],[1,2,3]]

// typeof
function func(array: (string | number)[]): number[] {
  for (let i in array) {
    if (typeof array[i] === "string") {
      array[i] = 0;
    }
  }
  return array as number[];
}

console.log(func(array));

// create a function that takes tuple name-age and
// returns Person object (person object will have name, age and createdAt)

type name_age = [string, number];

interface Person {
  name: string;
  age: number;
  createAt: number;
}

function func1(nameAge: name_age): Person {
  const obj = {
    name: nameAge[0],
    age: nameAge[1],
    createAt: Date.now(),
  };
  return obj;
}

console.log(func1(["jhon", 20]));

interface FootballPlayer extends Person {
  position: string;
  club: string;
}

function func2(person: Person): void {
  console.log("Hi", person.name);
}
const player: FootballPlayer = {
  name: "jhfs",
  age: 23,
  position: "jkghadlk",
  club: "jdkhgkdjlf",
  createAt: 74657834,
};

func2(player);

// we will have variable position, it is an object with x and y.
// We have a function move that takes value that can be "up", "down", "left", "right".
// Function changes position based on value. Up - y++, down - y--, left - x--, right - x++

interface Position {
  x: number;
  y: number;
}

let obj: Position = {
  x: 0,
  y: 0,
};

function move(direction: "up" | "down" | "left" | "right"): Position {
  if (direction === "left") {
    obj.x++;
  }
  if (direction === "right") {
    obj.x--;
  }
  if (direction === "up") {
    obj.y++;
  }
  if (direction === "down") {
    obj.y--;
  }
  return obj;
}
// function on top of move will console.log "user is moving up" or "user is moving down"
// enum classType {
//   PROG = "Programming",
//   MATH = "Math",
// }

enum directionType {
  up = "up",
  down = "down",
  left = "left",
  right = "right",
}

function moveFunc(direction: directionType): Position {
  console.log(`user is moving ${direction}`);
  return move(direction);
}

console.log(move("up"));
console.log(moveFunc(directionType.up));
