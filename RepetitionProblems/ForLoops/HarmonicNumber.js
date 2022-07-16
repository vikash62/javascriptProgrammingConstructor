//Que 2: Write program that takes command-line argument n & prints the nth harmonic number

const prompt = require("prompt-sync")();

let num=parseInt(prompt("Enter the number : "));

let harmonicNum = 0;
for(let i =1;i<=num;i++)
{
    harmonicNum = harmonicNum+1/i;
}
console.log(num+"th harmonic number is: "+ harmonicNum);