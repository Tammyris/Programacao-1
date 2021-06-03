input = require("prompt-sync")(); // comando para leitura de dados digitados

let a = parseFloat(input("Digite o lado do retângulo: "));
let b = parseFloat(input("Digite o outro lado do retângulo: "));
area = a * b;
console.log("Um dos lados do retângulo é ",a);
console.log("O outro lado do retângulo é ",b);
console.log("A área do retângulo é ",area)
