import { Device } from "./Device";

class Remote {
  Device: Device;
  constructor(Device: Device) {
    this.Device = Device;
  }

  turnOn() {
    return this.Device.turnOn();
  }
  turnOff() {
    return this.Device.turnOff();
  }

  getVolume() {
    return this.Device.getVolume();
  }

  setVolume(volume: number) {
    return this.Device.setVolume(volume);
  }
}

export { Remote };
