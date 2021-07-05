input = require("prompt-sync")();

let n;
let soma = 0;
let i;

n = parseInt(input("Digite um número: "));
for (i= 1; i<=n; i++){
    soma += i; 
}

if (n>=1){
    console.log("A soma dos números inteiros entre 1 e",n,"é",soma);
}
else {
    console.log("Encerrar execução!")
}


