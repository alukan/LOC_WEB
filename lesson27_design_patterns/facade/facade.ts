class Projector {
  projectorOn: boolean = false;

  turnOn() {
    this.projectorOn = true;
    console.log("projector is on");
  }

  turnOff() {
    this.projectorOn = false;
    console.log("projector is off");
  }
}

class Player {
  playerOn: boolean = false;
  playerPlay: boolean = false;

  turnOn() {
    this.playerOn = true;
    console.log("player is on");
  }

  turnOff() {
    this.playerOn = false;
    console.log("player is off");
  }

  play() {
    this.playerPlay = true;
    console.log("player is running");
  }

  stop() {
    this.playerPlay = false;
    console.log("player has stopped");
  }
}

class HomeTheaterFacade {
  private projector: Projector;
  private player: Player;

  constructor(projector: Projector, player: Player) {
    this.projector = projector;
    this.player = player;
  }

  watchMovie() {
    if (!this.projector.projectorOn) {
      this.projector.turnOn();
    }
    this.player.turnOn();
    this.player.play();
  }

  endMovie() {
    this.projector.turnOff();
    this.player.stop();
    this.player.turnOff();
  }
}

const projector = new Projector();
const player = new Player();
const homeTheater = new HomeTheaterFacade(projector, player);

homeTheater.watchMovie();
homeTheater.endMovie();
