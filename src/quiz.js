'use strict';

let weapon = require('./weapons');

let Robot = function(){
	this.name = null;
	this.model = null;
	this.type = null;
	this.weapon = null;
	this.health = null;
	this.damage = null;
	// this.toString = null;
};

Robot.prototype.generateHealth = function(max, min){
	let health = Math.floor(Math.random() * (max - min) + min);
	return health;
};

Robot.prototype.setWeapon = function(newWeapon){
	this.weapon = newWeapon;
};



// Drone models
let Drone = function(){
	this.type = 'Drone';

};
Drone.prototype = new Robot();

let Viper = function(){
	this.model = 'Viper';
	this.maxHealth = 80;
	this.minHealth = 50;
	this.health = this.generateHealth(this.maxHealth, this.minHealth);
};
Viper.prototype = new Drone();
// Viper.setWeapon(new weapon.Grenade());

let testBot = new Viper();
testBot.name = 'abc';
console.log('testBot', testBot);

// Bipedal models
let Bipedal = function(){
	this.type = 'Bipedal';

};
Bipedal.prototype = new Robot();

let Warrior = function(){
	this.model = 'Warrior';
	this.maxHealth = 95;
	this.minHealth = 70;
	this.health = this.generateHealth(this.maxHealth, this.minHealth);
};
Warrior.prototype = new Bipedal();
// Warrior.setWeapon(new weapon.Rocket());
console.log('Warrior', Warrior);


// ATV models
