import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.inputEnabled = true;
    console.log(game.state.states['Game'])
  }

  show(data){
  	this.monsterName(data.name,0x111111)
  	console.log(data)
  	this.monsterStats({str:data.STR,dex:data.DEX,int:data.INT,rolls:data.rolls,wd:data.weaponDamage,me:data.magicEffect},0x111111)
  	this.spawnHearts(data.hearts)
  	this.monsterType(data.type)
  	this.monsterDescription(data)
  	this.monsterActions(data.actions)
  }

  monsterName(name,col){
  	let name_txt = this.game.add.bitmapText(this.game.world.centerX, 74, 'nusaliver' , name.toUpperCase(), 42)
  	name_txt.tint=col
  	name_txt.anchor.setTo(0.5)
  }

  monsterStats(stats,col){
  	const {rolls, str, dex, int, wd, me } = stats
  	console.log(stats)
  	let stats_txt = this.game.add.bitmapText(this.game.world.centerX, 118, 'nusaliver' ,`Rolls: ${rolls>0 && `+${rolls} STATS`}${str!=0 ? `, +${str} STR` : '' }${int!=0 ? `, ${int} INT` : '' }${wd!=0 ? `, +${wd} WD` : '' }${me!=0 ? `, +${me} ME` : '' }`, 26)
  	stats_txt.tint=col
  	stats_txt.anchor.setTo(0.5)
  }

  spawnHearts(hearts){
  	
  	let span = (this.game.world.centerX - (hearts*(75/2)))

  	for(let i = 0; i<hearts; i++){
  		let heart = this.game.add.sprite(span+i*75,232,'heart')
  		heart.alpha=0.9
  	}

  }

  monsterType(type){
  	let type_txt = this.game.add.bitmapText(this.game.world.centerX, 334, 'nusaliver' , `${type.toUpperCase()} MONSTER`, 36)
  	type_txt.tint=0x111111
  	type_txt.anchor.setTo(0.5)
  }

 
  monsterDescription(data){	
  	
  	let desc_txt = this.game.add.bitmapText(64, 400, 'nusaliver' , `Description: `, 36)
  	desc_txt.tint=0x111111

   	let newArr = []
	newArr = data.description[3].split(",")
	data.description.splice(-1,1)
	let arr = this.game.arrayUnique(data.description.concat(newArr))
	let index = arr.indexOf("-")
	if(index>-1){
		arr.splice(index,1)
	}

	let index2 = arr.indexOf(" ")
	if(index2>-1){
		arr.splice(index2,1)
	}
	
	arr.push(`${data.size} size`)

  	arr.forEach((d,i)=>{
  		let desc_txt = this.game.add.text(64, 474+i*42, `- ${d}`)
  		desc_txt.align="left"
  		desc_txt.font = "Montserrat"
  		desc_txt.fontSize = 32
  		i++
  	})
  }

  monsterActions(actions){

  	let action_txt = this.game.add.bitmapText(64, 761, 'nusaliver' , `Actions: `, 36)
  	action_txt.tint=0x111111

  	actions.forEach((d,i)=>{
  		let action_txt = this.game.add.text(64, 825+i*42, `> ${d}`)
  		action_txt.align="left"
  		action_txt.font = "Montserrat"
  		action_txt.fontSize = 32;
  		i++
  	})

  }

  update () {
  	//no update
  }
}
