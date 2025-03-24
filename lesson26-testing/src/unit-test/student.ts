class Student {
  name: string;
  age: number;
  grade: number;
  isAdult: boolean;

  constructor(name: string, age: number, grade: number) {
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.isAdult = age >= 18;
  }

  inFiveYears() {
    this.age = this.age + 5;
    this.isAdult = this.age >= 18;
  }
}

export { Student };
