input = require("prompt-sync")();
console.log("Considerando a equação do 2°grau: ax²+bx+c");
let a = parseFloat(input("Informe a: "));
let b = parseFloat(input("Informe b: "));
let c = parseFloat(input("Informe c: "));

delta = (b**2) - (4*a*c);
console.log(delta)

if (delta < 0){
    console.log("As raízes são imaginárias")
}
else {
    console.log("As raízes são reais")
}