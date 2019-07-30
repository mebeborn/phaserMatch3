import { CST } from "../src/CST";

export class MenuScene extends Phaser.Scene {
  constructor() {
    super({
      key: CST.SCENES.MENU
    })
  }

  create(){
    const clickButton = this.add.text(250, 250, 'NEW GAME', { font: "100px Arial", fill: '#0f0' })
      .setInteractive()
      .on('pointerdown', () => this.scene.start(CST.SCENES.GAME));
  }
}