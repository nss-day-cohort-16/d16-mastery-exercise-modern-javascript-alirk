'use strict';

let weapon = require('./weapons');

let Robot = function(name){
	this.name = name || 'Mystery Bot';
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

Robot.prototype.getDamage = function(weapon){
	this.damage = this.weapon.damage;
};

// Drone models
let Drone = function(){
	this.type = 'Drone';

};
Drone.prototype = new Robot();

let Viper = function(){
	this.model = 'Viper';
	this.health = this.generateHealth(80, 50);
	// this.damage = this.getDamage();
};
Viper.prototype = new Drone();

let Riddler = function(){
	this.model = 'Riddler';
	this.health = this.generateHealth(100, 60);
};

// Bipedal models
let Bipedal = function(){
	this.type = 'Bipedal';

};
Bipedal.prototype = new Robot();

let Warrior = function(){
	this.model = 'Warrior';
	this.health = this.generateHealth(95, 70);
};
Warrior.prototype = new Bipedal();

let Ninja = function(){
	this.model = 'Ninja';
	this.health = this.generateHealth(80, 65);
};
Ninja.prototype = new Bipedal();

// ATV models
let ATV = function(){
	this.type = 'ATV';
};
ATV.prototype = new Robot();

let Kamikaze = function(){
	this.model = 'Kamikaze';
	this.health = this.generateHealth(75, 45);
};
Kamikaze.prototype = new ATV();

let Transformer = function(){
	this.model = 'Transformer';
	this.health = this.generateHealth(80, 70);
};
Transformer.prototype = new ATV();

//////////////////////////////////

module.exports = { Viper, Riddler, Warrior, Ninja, Kamikaze, Transformer };