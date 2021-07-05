input = require("prompt-sync")();

let B = [];
let C = [];
var i;
var j;

for (i=0; i<=4; i++){
    B[i] = input("Digite um número: ");  
}

C[0] = B[0];
for (i=1; i<=4; i++){
    console.log(i);
    for (j=0; j<=C.length; j++){
        console.log(j)
        if (B[i] != C[j]) {
            (C[j+1] = B[i]);
        }
    }
}
console.log(B);
console.log(C);





















//var B = [1,1,1,2,4,5,6,6,6,9];
//Método1
//var C = B.reduce((acc, curr) => (acc[curr] = '', acc), {});
//console.log(Object.keys(C));

//Método2
//var C = [new Set(B)];
//console.log(C)

//Método3
/*function unique(value, index, self) { 
    return self.indexOf(value) === index;
}

var B = [1,1,1,2,4,5,6,6,6,9];
var unique = B.filter(unique);
console.log(unique);*/

