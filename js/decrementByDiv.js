"use strict";
console.log("decrementByDiv.js");



//DECREMENT BY DIVISION
//A For loop reducing 4096 by dividing by two at each step.

console.log("**************************");
console.log("DECREMENT BY DIVISION");
console.log("**************************");

let iList2 = document.getElementById("ex2");

for (let i2 = 4096; i2 > 1; i2 = i2 / 2) {
	console.log("Current value is ", i2);
	
iList2.innerHTML  += `<li>Current value is ${i2}</li>`;
}


//ARRAY INTERATION



//OBJECT ITERATION





