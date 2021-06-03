input = require("prompt-sync")();
let num = parseInt(input("Digite um número inteiro qualquer: "));
if (num % 2 == 0) {
    console.log("Número par")
}
else {
    console.log("Número ímpar")
}