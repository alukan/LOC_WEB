import { Color } from "./color";

interface Shape {
  shape: string;
  color: Color;
}

class Square implements Shape {
  shape = "square";
  color: Color;

  constructor(color: Color) {
    this.color = color;
  }
}

class Circle implements Shape {
  shape = "Circle";
  color: Color;

  constructor(color: Color) {
    this.color = color;
  }
}

export { Square, Circle };
