input = require("prompt-sync")();
let a = parseInt(input("Digite um número: "));
let b = parseInt(input("Digite um segundo número: "));
let c = parseInt(input("Digite um terceiro número: "));

if (a > b && a > c) {
    console.log("O maior valor é ",a);
}
else if (b > a && b > c ) {
    console.log("O maior valor é ",b);
}
else if (c > a && c > b) {
    console.log("O maior valor é ",c);
}