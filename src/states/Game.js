/* globals __DEV__ */
import Phaser from 'phaser'
import { generateMonster } from '../utils'
import Card from '../sprites/Card'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {

    this.card_group = this.add.group()
    this.generateNewCard()

    

  }

  generateNewCard(){
    
    this.card = new Card({
      game:this,
      x:this.world.centerX,
      y:this.world.centerY,
      asset:'card'});

    this.card.show(generateMonster())
    this.card_group.add(this.card)

  }

  arrayUnique(array){
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
  }


}
