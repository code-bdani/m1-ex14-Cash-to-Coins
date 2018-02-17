// This code will take a user's dollar amount and let them know the simplest coin combination equivalent

// Asks the user for a value and stores it in "dollarAmount"
const dollarAmount = prompt("How much money do you have?"); 

// Sets up "piggyBank" as an empty object
const piggyBank = {};

// Your magic code here

// takes value of "dollarAmount" and stores it in a new variable that can be redefined
let userInput = dollarAmount;
console.log("The user has: $", userInput);

// adds four properties to the empty "piggyBank" object and makes each of their values "0" to start
piggyBank.quarters = 0;
piggyBank.dimes = 0;
piggyBank.nickles = 0;
piggyBank.pennies = 0;

console.log("The piggy bank started out with:", piggyBank);

//Redfines the value of each key in the "piggyBank" object with the appropriate math performed on the "userInput"
piggyBank.quarters = Math.floor(userInput / 0.25);
let remainder = userInput % 0.25;

piggyBank.dimes = Math.floor(remainder / 0.10);
remainder = remainder % 0.10;

piggyBank.nickles = Math.floor(remainder / 0.05);
remainder = remainder % 0.05;

piggyBank.pennies = Math.floor(remainder / 0.01);
remainder = remainder % 0.01;

// Outputs "dollarAmount" and amount of coins to the DOM
var output = document.getElementById("user-input");
output.innerHTML = `If you have $${dollarAmount}, the simplest combination of change would be:`;

var coinCount = document.getElementById("coin-count");
coinCount.innerHTML += `<li>Quarters = ${piggyBank.quarters}</li>`;
coinCount.innerHTML += `<li>Dimes = ${piggyBank.dimes}</li>`;
coinCount.innerHTML += `<li>Nickles = ${piggyBank.nickles}</li>`;
coinCount.innerHTML += `<li>Pennies = ${piggyBank.pennies}</li>`;

console.log("The piggy bank now holds:", piggyBank);