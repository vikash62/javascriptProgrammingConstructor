
const prompt = require("prompt-sync")();

let number=prompt("Enter a Single Digit Number : ")

switch (number) {
    case "1":
        console.log(number +" is at Unit Digit place")
        break;
    case "10":
        console.log(number + " is at Ten's Digit place")
        break;
    case "100":
        console.log(number+ " is at Hundred's Digit place")
        break;
    case "1000":
        console.log(number + "is at Thousand's Digit place")
        break;
    default:
        console.log("Invalid Input")
        break;
}