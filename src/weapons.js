'use strict';

let Weapon = function(){
	this.name = null;
	this.damage = 1; //Default
};

Weapon.prototype.generateDamage = function(max, min){
	let damage = Math.floor(Math.random() * (max - min) + min);
	return damage;
};

let Rocket = function(){
	this.name = 'Rocket';
	this.damage = this.generateDamage(4, 1);
};
Rocket.prototype = new Weapon();

let Grenade = function(){
	this.name = 'Grenade';
	this.damage = this.generateDamage(7, 3);
};
Grenade.prototype = new Weapon();

module.exports = { Weapon, Rocket, Grenade };