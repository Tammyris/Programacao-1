input = require("prompt-sync")();

let n;
let m;
var soma = 0;
var prod = 1;

n = parseInt(input("Digite um valor para N: "))
m = parseInt(input("Digite um valor para M: "))
for (i=1; i<=n; i++){
    soma += i
}
//console.log (soma)

for (i=1; i<=m; i++){
    prod = prod*i  
}
//console.log(prod)

console.log("T = S X P")
console.log("S = ",soma)
console.log("P = ",prod)
console.log("T = ", soma*prod)

