//Que 6: Write a program to compute Factors of a number N using prime factorization method.

const prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter a number: "));
for (let i = 2; i <= number/2; i++) {
	while (number % i == 0) {
		console.log(i);
		number /= i;
	}
}
if (number != 1) {
	console.log(number);
}