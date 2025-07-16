interface Device {
  turnOn(): void;
  turnOff(): void;
  on: boolean;
  volume: number;
  getVolume(): number;
  setVolume(volume: number): void;
  getName(): string;
}

export { Device };
