input = require("prompt-sync")();

let nota;
let cont = 0;

nota = parseFloat(input("Digite sua nota: "));
soma = nota
while (nota < 99){
    nota = parseFloat(input("Digite sua nota: "));
    cont +=1;
    if (nota == 99){
        break;
    }
    soma += nota
}

media = soma/cont
console.log("A média aritmética dos alunos é",media);


