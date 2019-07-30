import { CST } from "../src/CST";

export class GameOverScene extends Phaser.Scene {
  constructor() {
    super({
      key: CST.SCENES.GAMEOVER
    })
  }

  create(){
    const clickButton = this.add.text(250, 250, 'GAME OVER!', { font: "100px Arial", fill: '#0f0' })
      .setInteractive()
      .on('pointerdown', () => this.scene.start(CST.SCENES.MENU));
  }
}