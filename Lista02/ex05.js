input = require("prompt-sync")();

let i;
let n;
let fatorial;
n = parseInt(input("Digite um número: "));
if (n == 0){
    fatorial = 1;
}
if (n > 0){
    fatorial = 1;
for (i=1; i<=n; i++){
    console.log(i);
    fatorial = fatorial*i;
    }
}

console.log(fatorial);