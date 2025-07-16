import { Device } from "./Device";

class Tv implements Device {
  on = false;
  volume = 0;

  turnOn() {
    this.on = true;
    return;
  }
  turnOff() {
    this.on = false;
    return;
  }

  getVolume() {
    return this.volume;
  }

  setVolume(volume: number) {
    if (volume > 100) {
      volume = 100;
    }
    this.volume = volume;
  }

  getName() {
    return "Tv";
  }
}

export { Tv };
