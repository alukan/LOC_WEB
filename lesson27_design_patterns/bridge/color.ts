interface Color {
  color: string;
}

class Red implements Color {
  color: string = "Red";
}

class Blue implements Color {
  color = "blue";
}

export { Color, Red, Blue };
