input = require("prompt-sync")();
saldo_medio = parseFloat(input("Digite seu saldo médio: "))

if (saldo_medio>=0 && saldo_medio<200) {
    console.log("Você não possui crédito!");
}
else if  (saldo_medio>=201 && saldo_medio<400) {
    console.log("Você possui crédito de", 0.2*saldo_medio, "reais");
}
else if  (saldo_medio>=401 && saldo_medio<600) {
    console.log("Você possui crédito de", 0.3*saldo_medio, "reais");
}
else{
    console.log("Você possui crédito de", 0.4*saldo_medio, "reais");
}