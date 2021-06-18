input = require("prompt-sync")();
let n1 = parseInt(input("Digite o 1º número: "));
let n2 = parseInt(input("Digite o 2º número: "));
let n3 = parseInt(input("Digite o 3º número: "));

if (n1 < n2 + n3 && n2 < n1 + n3 && n3 < n1 + n2){
    if (n1 = n2 && (n2 = n3)){
        console.log("Temos um triângulo equilátero")
    }
    else if ((n1 = n2 && n2 != n3) || (n2 = n3 && n1 != n2)){
        console.log("Temos um triângulo isóceles")
    }
    else {
        console.log("Temos um triângulo escaleno")
    }
}
else {
    console.log(n1, n2, "e", n3, "não são lados de um triângulo")
}