console.log("array-interation.js");

/* 
ARRAY INTERATION
Create an array that contains the names of American Presidents. 
Loop over that array with a `for` loop, and use string concatenation with `console.log()` to output the order and name of each President.
*/

//Create the array of presidents.
let prez = [
"George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson", "Martin Van Buren", "William Henry Harrison", "John Tyler"
]
let prezText = "";
	console.log("how many", prez.length);

//FOR loop going through each president until there are none left
for (let i = 0; i < prez.length; i++){
	console.log("president is", i);
}

//FOR loop counting the position of the president: #1, #2...
	for (let prezNum = 0; prezNum < prez.length; prezNum++){
	prezText += `<li>President # ${[prezNum + 1]} is ${prez[prezNum]}</li>`;}

console.log(prezText);


let prezList = document.getElementById("ex3");
	console.log("prezList", prezList);
	prezList.innerHTML = prezText;
	
   




