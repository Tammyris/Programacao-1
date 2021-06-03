input = require("prompt-sync")();

let f = parseFloat(input("Digite a temperatura em graus Farenheit: "));
c = (f-32)/1.8;
console.log("A temperatura em Celsius é "+c.toFixed(2)+"°C")