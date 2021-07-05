input = require("prompt-sync")();

let paciente = [];
let sexo = [];
let peso = [];
let idade = [];
let altura = [];

opcao = 0
while (opcao != 8){
console.log("------MENU------")
console.log("[1] Quantidade de pacientes")
console.log("[2] Média de idade de homens")
console.log("[3] Mulheres com altura entre 1,60 e 1,70m e peso acima de 70kg")
console.log("[4] Pessoas com idade entre 18 e 25")
console.log("[5] Paciente mais velho")
console.log("[6] Mulher mais baixa")
console.log("[7] Cadastrar paciente")
console.log("[8] Sair do sistema")
opcao = parseInt(input("Escolha sua opção"))

if (opcao == 1){
    console.log(paciente.length)
}
else if (opcao == 2){
    

}
else if (opcao == 3){
    
}
else if (opcao == 4){
    
}
else if (opcao == 5){
    
}
else if (opcao == 6){
    
}
else if (opcao == 7){

    cadastro_nome = paciente.push(input("Digite o nome do paciente: "));
    console.log(paciente)
    cadastro_sexo = sexo.push(input("Digite seu sexo [F/M]"));
    console.log(sexo)
    cadastro_peso = peso.push(parseFloat("Digite seu peso em kg: "));
    console.log(peso)
    cadastro_idade = idade.push(parseInt("Digite sua idade: "));
    console.log(idade)
    cadastro_altura = altura.push(parseFloat("Digite sua altura em m: "));
    console.log(altura)
}
else{
    console.log("Escolha uma opção válida!")
}
}

