
var firstNumber = Math.round(Math.random() * 100);
var secondNumber = Math.round(Math.random() * 100);
var thirdNumber = Math.round(Math.random() * 100);

var firstResult = firstNumber + secondNumber * thirdNumber;
var secondResult = firstNumber % secondNumber + thirdNumber;
var thirdResult = thirdNumber + firstNumber / secondNumber;
var fourthResult = firstNumber * secondNumber + thirdNumber;

console.log("Result 1 = " + firstResult);
console.log("Result 2 = " + secondResult);
console.log("Result 3 = " + thirdResult);
console.log("Result 4 = " + fourthResult);

if (firstResult < secondResult && firstResult < thirdResult && firstResult < fourthResult) {
    minimumResult = firstResult;
} else if (secondResult < firstResult && secondResult < thirdResult && secondResult < fourthResult) {
    mminimumResultin = secondResult;
} else if (thirdResult < firstResult && thirdResult < secondResult && thirdResult < fourthResult) {
    minimumResult = thirdResult;
} else {
    minimumResult = fourthResult;
}

if (firstResult > thirdResult && firstResult > fourthResult && firstResult > secondResult) {
    maximumResult = firstResult;
} else if (secondResult > thirdResult && secondResult > fourthResult && secondResult > firstResult) {
    maximumResult = secondResult;
} else if (thirdResult > firstResult && thirdResult > secondResult && thirdResult > fourthResult) {
    mmaximumResultax = thirdResult;
} else {
    maximumResult = fourthResult;
}

console.log("Maximum = " + maximumResult);
console.log("Minimum = " + minimumResult);