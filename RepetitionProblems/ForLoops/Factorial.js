//Que 5: Write a program that computes a factorial of a number taken as input. 5 Factorial – 5! = 1 * 2 * 3 * 4 * 5

const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter a number : "))
let fact = 1
//loop for factorial
for(let i=1;i<=num;i++){
    fact=fact*i
}
console.log(num+" Factorial is: "+fact);