
const prompt = require("prompt-sync")();

let number =prompt("Enter a Single Digit Number : ")

if (number == 1) {
    console.log(number +" is at Unit place")
}else if (number == 10) {
    console.log(number + " is at Ten's place")
}else if (number == 100) {
    console.log(number+ " is at Hundred's place")
}else if (number == 1000) {
    console.log(number + "is at Thousand's place")
}