//Que1: Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value

let max = 0;
let min = 999;
let random = Math.floor(Math.random() * 1000)+100;

for ( let i=1; i<=5; i++) 
{ 
let random = Math.floor(Math.random() * 1000)+100;
console.log("Random Numbers are: " +random);
if ( random >= max)
 {
	max = random;
 }
else {
	min = random;
}
}
console.log("Maximum is " +max);
console.log("Minimum is " +min);