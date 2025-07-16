import { Remote } from "./Remote";
import { Radio } from "./Radio";
import { Device } from "./Device";
import { Tv } from "./Tv";

const radio = new Radio();

const radioRemote = new Remote(radio);

const tv = new Tv();

const tvRemote = new Remote(tv);

radioRemote.turnOn();

radioRemote.setVolume(70);
console.log(radioRemote.getVolume());

tvRemote.turnOn();

tvRemote.setVolume(70);

console.log(tvRemote.getVolume());
