//Que 4: Write a Program where a gambler starts with Rs 100 and places Re 1 bet until he/she goes broke i.e. no more money to gamble or reaches the goal of Rs 200. Keeps track of number of times won and number of bets made.

const prompt = require("prompt-sync")();

let money =100;
let win =0;

while(money>0 && money<200)
{
    let gamblingResult = Math.floor(Math.random()*10)%2;
if(gamblingResult == win)
{
    console.log("It's win");
    money++;
    console.log(money);
}
else{
    console.log("It's loss");
    money--;
    console.log(money);
}
}
if(money == 0)
{
    console.log("no more money to gamble");
}
else{
    console.log("gambler reached goal");
}