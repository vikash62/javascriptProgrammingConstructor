//Que 3: Take a number from user and check if the number is a prime then show that its palindrome is also prime
// a. Write function check if number is Prime
// b. Write function to get the Palindrome.
// c. Check if the Palindrome number is also prime

const prompt = require("prompt-sync")();

function checkPalindrome(number){
    let number1=number;
    let sum=0;
    while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			sum = sum*10+rem;
		}

    if(sum==number1){
        return true;
    }
    else{
        return false;
    }
}

function checkPrime(number){
    let flag=0;
    for(let i=2;i<number/2+1;i++){
        if(number%i==0){
            flag=1;
            break;
        }
    }
    if(flag==0){
        return true;
    }
    else{
        return false;
    }
}
var number=parseInt(prompt("Enter a number: "));
let is_Prime=checkPrime(number);
let is_Palindrome=checkPalindrome(number);
if(is_Prime && is_Palindrome){
    console.log(number+" is Prime Palindrome");
}
else if(is_Palindrome){
    console.log(number+" is Palindrome");
}
else if(is_Prime){
    console.log(number+" is Prime");
}
else{
    console.log(number + " is not Prime and Palindrome");
}