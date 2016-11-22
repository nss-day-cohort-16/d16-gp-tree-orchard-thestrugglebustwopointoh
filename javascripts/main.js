"use strict";

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



Plant.prototype.increaseHeight = function (heightIncrease) {
	this.height += heightIncrease;
};


Plant.prototype.decreaseHeight = function (heightDecrease) {
	this.height -= heightDecrease;
};


Tree.prototype.grow = function (growHeight) {
	this.height += growHeight;
	
	if(PearTree.height % 10 === 0) {
    	console.log("woo! add a branch");
    	PearTree.branches += 1;
    	//trimTree();
    }
	
	//grow should be calling increaseHeight.
	//and checking for trim.
};


Tree.prototype.trim = function (branchDecrease) {
	this.height -= branchDecrease;
	this.branches -= 1;
};


let PearTree = new Tree();
let OakTree = new Tree();

//console.log(OakTree);

let counter = 0;

console.log(PearTree);


function buildTree(){
	
	//console.log(counter);

	PearTree.grow(2);

	console.log(`Pear Tree is now ${PearTree.height} inches tall and has ${PearTree.branches} branches.`);

	// if(PearTree.height % 10 === 0) {
 //    	console.log("woo! add a branch");
 //    	PearTree.branches += 1;
 //    	//trimTree();
 //    }

    if ((counter - 1) === 5) {
		clearInterval(setTimer);
		console.log("timer stopped");
		console.log(PearTree);
	}

	counter ++;

}

var setInterval;
var setTimer = setInterval(buildTree, 1000);






