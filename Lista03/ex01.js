//var B = [1,1,1,2,4,5,6,6,6,9];
//Método1
//var C = B.reduce((acc, curr) => (acc[curr] = '', acc), {});
//console.log(Object.keys(C));

//Método2
//var C = [new Set(B)];
//console.log(C)

//Método3
function unique(value, index, self) { 
    return self.indexOf(value) === index;
}

var B = [1,1,1,2,4,5,6,6,6,9];
var unique = B.filter(unique);
console.log(unique);

