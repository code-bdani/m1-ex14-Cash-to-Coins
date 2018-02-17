const dollarAmount = prompt("How much money do you have?");
const piggyBank = {};

// Your magic code here

piggyBank.coins = constructPiggyBankObject(0.25, 0.10, 0.05, 0.01);

function constructPiggyBankObject(quarters, dimes, nickles, pennies) {
    var coins = {};
    coins.quarters = quarters;
    coins.dimes = dimes;
    coins.nickles = nickles;
    coins.pennies = pennies;
    return coins;
};

console.log(piggyBank);

var output = document.getElementById("userInput");
output.innerHTML = `If you have $${dollarAmount}, the simplest change would be:`;

// if (piggyBank.quarters > dollarAmount) {
//     dollarAmount = dollarAmount / piggyBank.quarters;
//     return dollarAmount;
// } else if (piggyBank.dimes > dollarAmount) {
//     dollarAmount = dollarAmount / piggyBank.dimes;
//     return dollarAmount;
// } else if (piggyBank.nickles > dollarAmount) {
//     dollarAmount = dollarAmount / piggyBank.nickles;
//     return dollarAmount;
// } else if (piggyBank.pennies > dollarAmount) {
//     dollarAmount = dollarAmount / piggyBank.pennies;
//     return dollarAmount;
// };