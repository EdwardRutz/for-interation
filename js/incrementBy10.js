"use strict";
console.log("incrementBy10.js");


// INCREMENT BY 10.
// Starts at 5, adds 10 and stops when the value is over 120.
console.log("**************************");
console.log("INCREMENT BY 10")
console.log("**************************");

let iList = document.getElementById("ex1");

for (let i = 5; i < 120; i = i + 10) {
	console.log("Current value is ", i);
	iList.innerHTML += `<li>Current value is ${i}</li>`;
}
