input = require("prompt-sync")();
let a = parseFloat(input("Digite um número: "));
let b = parseFloat(input("Digite outro número: "));

if (a>b) {
    c = a - b;
}
else {
    c = b - a;
}

console.log("O valor de a é ",a)
console.log("o valor de b é ",b)
console.log("A diferença entre eles é ",c)