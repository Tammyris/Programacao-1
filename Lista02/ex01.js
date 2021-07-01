
//fazendo sem arrey
input = require("prompt-sync")();
let n;

n = parseInt(input ("Digite um número: "));
if (n !=0){
var maior = n;
var menor = n;
while (n != 0) {
    if (n > maior){
        maior = n
    }
    if (n < menor){
        menor = n
    }  
    n = parseInt(input ("Digite um número: "));
 
}
console.log(maior, "É o maior número informado")
console.log(menor, "É o menor número informado")
}



//fazendo com arrey
/*var cont = 0;
let n = [];
let maior = 1;
let menor = 1;

while (n[cont] != 0) {
    n[cont] = parseInt(input ("Digite um número: "));
    cont += 1;
    n[cont] = parseInt(input ("Digite um número: "));
    if (n[cont] > maior){
        maior = n[cont]
    }
    if ((n[cont] < menor) && (n[cont] !=0)){
        menor = n[cont]
    }
    }

console.log(n)
console.log(maior, "É o maior número informado")
console.log(menor, "É o menor número informado")*/




