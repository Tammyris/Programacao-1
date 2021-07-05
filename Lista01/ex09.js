input = require("prompt-sync")();
var data = new Date();
var dia_atual = String(data.getDate()).padStart(2,'0');
var mes_atual = String(data.getMonth()+1).padStart(2,'0');
var ano_atual = data.getFullYear()

let nome = input("Digite seu nome: ");
let nasc = (input("Digite sua data de nascimento: ")).split("/");
let dia = nasc[0]
let mes = nasc[1]
let ano = nasc[2]

if (mes>mes_atual){
    console.log(nome, " tem", ((ano_atual-1)-ano), " anos");
}
if (mes==mes_atual){
    if (dia<=dia_atual){
        console.log(nome, " tem", (ano_atual)-ano, " anos");
    }
    else if (dia>dia_atual){
        console.log(nome, " tem", (ano_atual-1)-ano, " anos");
    }
}
if (mes<mes_atual){
    console.log(nome, " tem", (ano_atual)-ano, " anos");
}
if (ano_atual==ano){
        console.log(nome, " tem", (mes_atual-mes), " meses");
}


