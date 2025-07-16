import { Device } from "./Device";

class Radio implements Device {
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
    if (volume > 50) {
      volume = 50;
    }
    this.volume = volume;
  }

  getName() {
    return "Radio";
  }
}

export { Radio };
