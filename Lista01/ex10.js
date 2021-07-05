input = require("prompt-sync")();
let custo_fabrica = parseFloat(input("Digite o custo de fábrica do carro: "));
custo_consumidor = custo_fabrica*(1 + 0.28 + 0.45);

console.log("O custo do consumidor será ",custo_consumidor, " reais")