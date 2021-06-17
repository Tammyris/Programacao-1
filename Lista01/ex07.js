input = require("prompt-sync")();

let num1 = parseInt(input ("Digite um número: "));
let num2 = parseInt(input("Digite outro número: "));
let operacao = input("Informa a operação matemática que deseja realizar (+,-,/,*): ");

if (operacao == "+") {
    console.log("A some é", num1 + num2)
}
else if (operacao == "-") {
    console.log("A subtração é", num1 - num2)
}
else if (operacao == "*") {
    console.log("A multiplicação é", num1 * num2)
}
else if (operacao == "/") {
    console.log("A divisão é", num1 / num2)
}
else {
    console.log("Operação digitada inválida")
}