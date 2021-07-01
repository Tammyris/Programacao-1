input = require("prompt-sync")();

let n;
var i;
soma = 0;

console.log("H = 1 + 1/2 + 1/3 + ... + 1/N")
n = parseInt(input("Digite um valor para N: "))

for (i=1; i<=n;i++){
    fracao = 1/i
    soma += fracao;
}

console.log("O valor de H obtido foi",soma)