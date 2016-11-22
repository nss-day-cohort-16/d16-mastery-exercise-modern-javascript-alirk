'use strict';

let robot = require('./quiz');
let weapon = require('./weapons');

let userBot1, userBot2;

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

let buildBot = function(name, model, weapon){
	let bot = null;
	switch(model){
		case 'viper':
			bot = new robot.Viper();
			break;
		case 'ninja':
			bot = new robot.Ninja();
			break;
	}
	bot.name = name;
	bot.setWeapon(selectWeapon(weapon));
	bot.getDamage();
	// console.log('bot', bot);
	return bot;
};

let selectWeapon = function(weaponSelect){
	let weaponChoice = null;
	switch(weaponSelect){
		case 'grenade':
			weaponChoice = new weapon.Grenade();
			break;
		case 'rocket':
			weaponChoice = new weapon.Rocket();
			break;
	}
	return weaponChoice;
};


$("#bot1-weapon").change(function(){
	userBot1 = buildBot($("#bot1-name").val(), $("#bot1-model").val(), $("#bot1-weapon").val());
	return userBot1;
});

$("#bot2-weapon").change(function(){
	userBot2 = buildBot($("#bot2-name").val(), $("#bot2-model").val(), $("#bot2-weapon").val());
	return userBot2;	
});

$("#attack").click(function(){

	console.log('userBot1 @start', userBot1);
	console.log('userBot2 @start', userBot2);

	userBot1.health = userBot1.health - userBot2.damage;
	userBot2.health = userBot2.health - userBot1.damage;

	console.log('userBot1', userBot1);
	console.log('userBot2', userBot2);

	checkGameOver(userBot1, userBot2);

});
