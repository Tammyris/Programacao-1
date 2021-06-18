input = require("prompt-sync")();
let n1 = parseInt(input("Digite o 1º número: "));
let n2 = parseInt(input("Digite o 2º número: "));
let n3 = parseInt(input("Digite o 3º número: "));

if (n1 < n2 + n3 && n2 < n1 + n3 && n3 < n1 + n2){
    console.log(n1, n2, "e", n3, "são lados de um triângulo")
}
else {
    console.log(n1, n2, "e", n3, "não são lados de um triângulo")
}