import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {


    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    //
    // load your assets
    //
    this.load.image('card', 'assets/images/card.png')
    this.load.image('heart','assets/images/cor.png')
    this.load.bitmapFont('nusaliver','assets/images/nusaliver.png','assets/images/nusaliver.xml')

  }

  create () {
    this.state.start('Game')
  }
}
