'use strict';

let robot = require('./quiz');
let weapon = require('./weapons');

let testBot = new robot.Viper();
testBot.name = 'abc';
testBot.setWeapon(new weapon.Grenade()); // PROMISE HERE
testBot.getDamage();
// console.log(testBot);

let testBot2 = new robot.Ninja();
testBot2.name = 'xyz';
testBot2.setWeapon(new weapon.Rocket());
testBot2.getDamage();

let attack = function(bot1, bot2){
	console.log('bot1 @start', bot1);
	console.log('bot2 @start', bot2);
	bot1.health = bot1.health - bot2.damage;
	bot2.health = bot2.health - bot1.damage;
	console.log('bot1', bot1);
	console.log('bot2', bot2);
};

attack(testBot, testBot2);