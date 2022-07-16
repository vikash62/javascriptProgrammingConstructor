
var ps = require("prompt-sync")
var prompt = ps();

let inchToFeet =1/12;
let feetToInch = 12;
let feetToMeter= 1/3.28;
let meterToFeet = 3.28;
let squareFeetToAcre = 1/43560;
let acreToSquareFeet = 43560;

let num1=parseInt(prompt("Enter the Inch Value to Convert into Feet : "))
console.log(num1 +  " inch is equal to " +(inchToFeet*num1) + " feet ")

let num2=parseInt(prompt("Enter the Feet Value to Convert into Inch : "))
console.log(num2 +  " feet is equal to " +(feetToInch*num2) + " inche ")

let num3=parseInt(prompt("Enter the Feet Value to Convert into Meter : "))
console.log(num3 +  " feet is equal to " +(feetToMeter*num3) + " meter ")

let num4=parseInt(prompt("Enter the Meter Value to Convert into Feet : "))
console.log(num4 +  " meter is equal to " +(meterToFeet*num4) + " feet ")

let num5=parseInt(prompt("Enter the Acre Value to Convert into Square Feet : "))
console.log(num5 +  " Acre is equal to " +(acreToSquareFeet*num5) + " square feet ")

let num6=parseInt(prompt("Enter the square feet Value to Convert into Acre : "))
console.log(num6 +  " squarefeet is equal to " +(squareFeetToAcre*num6) + " Acre ")