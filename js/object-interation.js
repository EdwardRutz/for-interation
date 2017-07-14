console.log("object-interation.js")

/* Object Iteration

You can use another kind of `for` loop to [iterate over objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in). Iterate over the object below and use `console.log()` to output the names of the keys in the object.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
*/


let antSpecies = {
  argentine: {size: "small"},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

console.log(antSpecies);
antList = document.getElementById("ex4");

for (var ant in antSpecies) {
	console.log("ant", ant);
	antList.innerHTML += `<li>Ant Species: ${ant}</li>`;
}  


console.log("antlist", antList);


/*
for (let i = 0; i < antSpecies.length; i++);
	console.log("ant is", ant); 

	for (let antNum = 0; antNum < antSpecies.length; antNum++){
		ant += `<li>Ant Species is ${ant[antNum]}</li>`;
	}
	console.log("antlist", antList);

	
*/



/*
		for (let prezNum = 0; prezNum < prez.length; prezNum++){
		prezText += `<li>President # ${[prezNum + 1]} is ${prez[prezNum]}</li>`;}
	*/



