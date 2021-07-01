input = require("prompt-sync")();

let n;
var i;


n = parseInt(input("Digite um número: "))
a1 = 0;
a2 = 1;
cont = 3;
console.log(a1)
console.log(a2)
while (cont<=n){
    a3 = a1 + a2;
    console.log(a3)
    a1 = a2;
    a2 = a3;
    cont +=1;
}
   

