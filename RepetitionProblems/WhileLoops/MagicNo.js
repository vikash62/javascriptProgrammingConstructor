//Que 2: Find the Magic Number
// a. Ask the user to think of number n between 1 to 100
// b. Then check with the user if the number is less then n/2 or greater
// c. Repeat till the Magic Number is reached..

const prompt = require("prompt-sync")();
console.log("Think of a number between 1 and 100.");

let start = 1;
let end = 100;
console.log("Enter y for YES and n for NO");
while (true) {
	let number = Math.floor((start + end) / 2);
	var choice = parseInt(prompt("is number equals to " + number + " "));
	choice = choice.toLowerCase();
	if (choice == "y") {
		console.log("number is: " + number);
		break;
	}
	choice = parseInt(prompt("is number greater than " + number + " "));
	if (choice == "y") {
		start = number + 1;
	} else {
		end = number - 1;
	}
}