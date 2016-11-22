'use strict';

let robot = require('./quiz');
let weapon = require('./weapons');

let testBot = new robot.Viper();
testBot.name = 'abc';
testBot.setWeapon(new weapon.Grenade()); // PROMISE HERE
testBot.getDamage();

let testBot2 = new robot.Ninja();
testBot2.name = 'xyz';
testBot2.setWeapon(new weapon.Rocket());
testBot2.getDamage();

let declareWinner = function(bot1, bot2){
	if(bot1.health <= 0){
		console.log('Bot2 wins!');
	} else if(bot2.health <= 0){
		console.log('Bot1 wins!');
	}
};

let checkGameOver = function(bot1, bot2){
	if(bot1.health <= 0 || bot2.health <= 0){
		declareWinner(bot1, bot2);
	}
};

let attack = function(bot1, bot2){
	bot1 = testBot;
	bot2 = testBot2;
	console.log('bot1 @start', bot1);
	console.log('bot2 @start', bot2);
	bot1.health = bot1.health - bot2.damage;
	bot2.health = bot2.health - bot1.damage;
	console.log('bot1', bot1);
	console.log('bot2', bot2);
	checkGameOver(bot1, bot2);
};






$("#attack").click(attack);