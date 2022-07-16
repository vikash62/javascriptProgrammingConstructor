//Que 1: Write program that takes command-line argument n & prints a table of tht powers of 2nthat are less than or equal to 2^n

const prompt = require("prompt-sync")();
var n=parseInt(prompt("Enter a number: "));
let i=0;
//loop
while(i<=n){
    console.log("2 to the power of "+i+" is "+Math.pow(2,i))
    i++;
}