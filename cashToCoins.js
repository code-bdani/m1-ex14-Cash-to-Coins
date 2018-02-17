// This code will take a user's dollar amount and let them know the simplest coin combination equivalent

// Asks the user for a value and stores it in "dollarAmount"
const dollarAmount = prompt("How much money do you have?"); 

// Sets up "piggyBank" as an empty object
const piggyBank = {};

// Your magic code here

// takes value of "dollarAmount" and stores it in a new variable that can be redefined
let userInput = dollarAmount;
console.log("The user has: $", userInput);

// creates a function to create a new object and adds it to "piggyBank" (doesn't work)
function CoinCollection(quarters, dimes, nickles, pennies) {
    this.quarters = quarters;
    this.dimes = dimes;
    this.nickles = nickles;
    this.pennies = pennies;
};

piggyBank = new CoinCollection(0.25, 0.10, 0.05, 0.01);

minusQuarters = (userInput / piggyBank.coins.quarters);
console.log(minusQuarters.toFixed(2));

minusDimes = (userInput / piggyBank.coins.dimes);
console.log(minusDimes.toFixed(2));

minusNickles = (userInput / piggyBank.coins.nickles);
console.log(minusNickles.toFixed(2));

minusPennies = (userInput / piggyBank.coins.pennies);
console.log(minusPennies.toFixed(2));

var output = document.getElementById("user-input");
output.innerHTML = `If you have $${dollarAmount}, the simplest combination of change would be:`;

var coinCount = document.getElementById("coin-count");
coinCount.innerHTML += `<li>Quarters = ${minusQuarters}</li>`;
coinCount.innerHTML += `<li>Dimes = ${minusDimes}</li>`;
coinCount.innerHTML += `<li>Nickles = ${minusNickles}</li>`;
coinCount.innerHTML += `<li>Pennies = ${minusPennies}</li>`;

console.log(piggyBank);