"use strict";

let counter = 0;

/// BASE TREE - DO NOT TOUCH
let Tree = function(){
	this.branches = 0;

};

/// BASE PLANT - DO NOT TOUCH
let Plant = function(){
	this.height = 0;
};

//Tree is a plant! Woo!
Tree.prototype = new Plant();

Plant.prototype.increaseHeight = function(heightIncrease) {
	this.height += heightIncrease;
};


Plant.prototype.decreaseHeight = function(heightDecrease) {
	this.height -= heightDecrease;
};


Tree.prototype.grow = function(growHeight) {
	this.increaseHeight(growHeight);
	
	if(this.height % 10 === 0) {
    	this.branches += 1;
    }
	
	this.trim(1);
};


Tree.prototype.trim = function(branchDecrease) {
	 if ((counter + 1) % 10 === 0) {
		this.height -= branchDecrease;
		this.branches -= 1;
		//console.log("Trim yo branches!");
	}
};


let PearTree = new Tree();
let OakTree = new Tree();

//console.log("PearTree --> ", PearTree);
//console.log("OakTree --> ", OakTree);

function buildTree(){
	
	PearTree.grow(2);
	OakTree.grow(5);

	document.getElementById("output").innerHTML += 
	`Pear Tree is now ${PearTree.height} inches tall and has ${PearTree.branches} branches.<br>
	 Oak Tree is now ${OakTree.height} inches tall and has ${OakTree.branches} branches.<br><br>`;
	
	//console.log(`Pear Tree is now ${PearTree.height} inches tall and has ${PearTree.branches} branches.`);
	//console.log(`Oak Tree is now ${OakTree.height} inches tall and has ${OakTree.branches} branches.`);

    if ((counter + 1) === 30) {
		clearInterval(setTimer);
		console.log("timer stopped");
		//console.log("Pear Tree-->", PearTree);
		//console.log("Oak Tree-->", OakTree);
	} 

	counter ++;

}

var setInterval;
var setTimer = setInterval(buildTree, 1000);






