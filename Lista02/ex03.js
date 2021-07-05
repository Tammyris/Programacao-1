input = require("prompt-sync")();

let n;

n = parseFloat(input("Digite um número: "))
soma = n;
while (n > 0){
    n = parseFloat(input("Digite um número: "));
    if (n <= 0){
        break;
    }
    soma += n;
}

console.log(soma);

