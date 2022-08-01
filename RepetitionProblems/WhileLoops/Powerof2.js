//Que 1: Write program takes command line argument n prints table of power of 2 less than or equal to 2^n till 256 is reached

let x = 0;
let i = 1;
let power=i
while (power < 256) {
	power = 2 ** i;
	console.log("2 ^" + i + "= " + power);
	i++;
}