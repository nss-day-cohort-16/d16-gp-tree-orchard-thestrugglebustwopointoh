"use strict";

//base models 

let Tree = function () {
	this.branch = 0;
};

let Plant = function () {
	this.height = 0;
};
//Plant should be the prototype of Tree.

Tree.prototype = new Plant();

// Start Prototypes

//Plant function should be defined // Use function Arrows? 

Plant.prototype.increaseHeight = function (addHeight) {
	this.height += addHeight;


};

Plant.prototype.decreaseHeight = function (subtractHeight)  {
	this.height += subtractHeight;
};

//Tree used to be a plant , but it grew into a full tree so here are the prototypes built from the plant

Tree.prototype.grow = function (addBranch) {

	this.height += addBranch;
	//this.grow += addHeight; 

};

Tree.prototype.trim = function (removeBranch) {

	this.height -= removeBranch;
	this.branch -= 1;
	//this.trim -= removeBranch;

};


// New trees based off of base model Tree 

let PearTree = new Tree();

let OakTree = new Tree(); 



// set up a variable to count the iterations of how many times a tree grows by a measurment (feet/milliseconds) of 10 then add a branch to it. 

var increment = 0; 

function increaseTree () {


	PearTree.increaseHeight(5);

	//var clearInterval;
	console.log(`branch increased by ${PearTree.height} and ${PearTree.branch}`);
	

	if ((increment - 1) === 30) {
	clearInterval(setInterval);
	} 

	if (PearTree.height % 10 === 0) {
	console.log("branch here");
	PearTree.branches += 1;
	}
	
	increment ++;
}

// setInterval allows a function to be past for an amount of time and because clearInterval was used we needed to create a setInterval variable.
var setInterval = setInterval(increaseTree, 1000);                                                                                               
