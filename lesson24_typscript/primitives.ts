// Primitives
let bool: boolean = true;
let num: number = 123;
let str: string = "42";
let undef: undefined = undefined; // something without value
let something;
console.log(something);
let nullValue: null = null; // setted as empty
let nanValue: number = NaN; // not a number

// "", undefined, 0, null, NaN, [] - all of them are false
// anything else is true
// true->1, false->0
// console.log(str + Number(Boolean(undef)));

// Arrays
let nums: number[] = [1, 2, 3];

let array: (number | string)[][] = [[1, "2", 3], ["apple"]];

// Tuple
type Point = [number, number, string];

let points: Point[] = [[3, 6, "x1"]];

// Enums
enum classType {
  PROGRAMMING = "Programming",
  MATH = "Math",
}

let class1: classType = classType.PROGRAMMING;
console.log(class1);

// interfaces
interface Person {
  name: string;
  age: number;
}

let obj: Person = {
  name: "John",
  age: 25,
};

// functions
function sum(a: number, b: number): number | void | Person {
  console.log(a + b);
  if (a > b) return a + b;
  else if (a == b) return;
  else {
    let person = {
      name: "John",
      age: 25,
    };
    return person;
  }
}

// type union
let variable: number | string = 3;
console.log(variable);
variable = "hello";
console.log(variable);

// top types
let smth: any = {
  name: "John",
  age: 25,
};
console.log(smth.age);
// unknown
let unknownValue: unknown = {
  name: "John",
  age: 25,
};

// any -> can be used instead of anything
// unkown -> can't be used instead of anything
sum(3, (unknownValue as Person).age);

// as const
const arr = [1, 2, 3] as const;
// arr[0] = 3;  // error
console.log(arr);

// not null assertion

interface User {
  firstName: string | undefined;
  lastName: string | undefined;
}

let user1: User = { firstName: "Harry", lastName: undefined };

function notNullAssertion(user: User): void {
  if (user.lastName) console.log(user.lastName.split(""));
  else console.log(user.firstName!.split(""));
}

notNullAssertion(user1);
