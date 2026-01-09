const userInput = prompt("Inserisci una parola: ");
console.log(userInput);

function invertiParola(parola) {
    let parolaInvertita = "";
    for (let i = parola.length - 1; i >= 0; i--) {
        parolaInvertita += parola[i];
    }   
    if (parola === parolaInvertita) {
        return true;
    } else {
        return false;
    }
}


