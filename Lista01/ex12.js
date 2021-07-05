input = require("prompt-sync")();
let nota1 = parseFloat(input("Digita a 1ª nota: "));
let nota2 = parseFloat(input("Digita a 2ª nota: "));
let nota3 = parseFloat(input("Digita a 3ª nota: "));
let p1 = 2.5;
let p2 = 3.5;
let p3 = 4;

media = ((nota1*p1) + (nota2*p2) + (nota3*p3))/(p1 + p2 + p3);

console.log("A primeira nota foi", nota1);
console.log("A segunda nota foi", nota2);
console.log("A terceira nota foi", nota3);
console.log("A média ponderada é", media)