input = require("prompt-sync")();
let nome=[];
let idade = [];
var cont;

for (cont=0; cont < 3; cont++) { 
     nome[cont] = input ("Digite seu nome: "); 
     idade[cont] = input ("Digite sua idade: ");
     
}

if (idade[0] > idade[1] && idade[0] > idade[2]) {
    console.log("A pessoa mais velha é",nome[0]);
}
else if (idade[1] > idade[0] && idade[1] > idade[2]) {
    console.log("A pessoa mais velha é",nome[1]);
}    
else if (idade[2] > idade[0] && idade[2] > idade[1]) {
    console.log("A pessoa mais velha é",nome[2]);
}

if (idade[0] < idade[1] && idade[0] < idade[2]) {
    console.log("A pessoa mais nova é",nome[0]);
}
else if (idade[1] < idade[0] && idade[1] < idade[2]) {
    console.log("A pessoa mais nova é",nome[1]);
}
else if (idade[2] < idade[0] && idade[2] < idade[1]) {
    console.log("A pessoa mais nova é",nome[2]);
}