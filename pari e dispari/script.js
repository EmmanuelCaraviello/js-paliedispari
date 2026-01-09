const userInput = prompt("pari o dispari?");
console.log(userInput);

const userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log(userNumber);
const computerNumber = Math.floor(Math.random() * 5) + 1;
console.log(computerNumber);
const sum = userNumber + computerNumber;
console.log(sum);
if (sum % 2 === 0) {
    if (userInput === "pari") {
        console.log("hai vinto");
    } else {
        console.log("hai perso");
    }
} 
else {
    if (userInput === "dispari") {
        console.log("hai vinto");
    } else {
        console.log("hai perso");
    }
}