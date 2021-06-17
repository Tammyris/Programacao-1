input = require("prompt-sync")();
let nome = input("Digite seu nome: ");
let nota1 = parseFloat(input("Digite sua 1ª nota: "));
let nota2 = parseFloat(input("Digite sua 2ª nota: "));
let nota3 = parseFloat(input("Digite sua 3ª nota: "));
let nota4 = parseFloat(input("Digite sua 4ª nota: "));

media = (nota1 + nota2 + nota3 + nota4)/4

if (media >= 6) {
    console.log("Parabéns! Você está aprovado!")
}
else if (media>= 5 && media<6) {
    console.log("Você está em recuperação!")
}
else {
    console.log("Você está reprovado!")
}