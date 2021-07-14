input = require("prompt-sync")();

//MENU GERAL
opcao = 0
while (opcao != 3){
console.log("----------MENU----------");
console.log("[1]- Cadastrar Questões");
console.log("[2]- Elaborar Prova");
// console.log("[3]- Responder Prova");
console.log("[3]- Sair")
opcao = parseInt(input("Escolha sua opção: "))

if (opcao == 1){
    //-------------------------------------------------------------------------------------------------------
// CADASTRO DE QUESTÕES
// listaQuestoes = [
    // {disciplina: "Matematica", professor: "Simeao", serie: "3", assunto: "Geometria Espacial", dificuldade: "1", enunciado: "Qual é o volume de um cubo de aresta 2?", alternativa: [1,8,12,5,7,14,22,50,21,100], resposta: ["F","V","F","F","F","F","F","F","F","F"]},
    // {disciplina: "Matematica", professor: "Tammyris", serie: "1", assunto: "Geometria Plana", dificuldade: "1", enunciado: "Qual a área de um quadrado de lado 2?", alternativa: [1,4,12], resposta: ["F","V","F"]},
    // {disciplina: "Historia", professor: "Joana", serie: "1", assunto: "Historia do Brasil", dificuldade: "1", enunciado: "Quem descobriu o Brasil", alternativa: ["Fausto Silva","Fernando Henrique Cardoso","Pedro Álvares Cabral", "Tammyris Carvalho", "Marcos Vinícius"], resposta: ["F","F","V","F","F"]}
// ]
//-------------------------------------------------------------------------------------------------------
//CADASTRANDO QUESTÕES

var listaQuestoes = [];
pergunta = input("Deseja cadastrar uma questão? Digite [s/n])").toLowerCase();
while (pergunta == "s" ){
    questao = {
        disciplina: "",
        elaborador: "",//pode ser o professor, coordenador ou até mesmo ser uma atividade terceirizada.
        serie: "",
        assunto: "",
        dificuldade: "",
        enunciado: "",
        numAlternativas: 0,
        alternativa: [],
        resposta: []
    }
    questao.disciplina = input("Digite o nome da disciplina: ");
    questao.elaborador = input("Digite o nome do elaborador: ");
    questao.serie = input("Digite a série: ");
    questao.assunto = input("Digite o assunto: ");
    questao.dificuldade = input("Digite a dificuldade (1-Fácil, 2-Intermediário, 3- Difícil): ");
    questao.enunciado = input("Digite o enunciado: ");
    questao.numAlternativas = input("Digite o número de alternativas disponíveis na questão: ");
    for(i=0; i<questao.numAlternativas;i++){
        questao.alternativa[i] = input("Digite a alternativa: ");
        questao.resposta[i] = input("Digite a resposta: ");
    }
    listaQuestoes.push(questao);
    pergunta = input("Deseja adicionar mais questão?");
}

console.log("Questões disponíveis no banco de questões: ",listaQuestoes);


}

if (opcao == 2) {
    //SELECIONANDO AS QUESTÕES PARA A PROVA

var prova = [];
var i=0;

elaborar = input("Deseja elaborar uma prova?[s/n]: ").toLowerCase();
numQuestoes = parseInt(input("Digite o número de questões da prova: "));
if (elaborar == "s"){
// while (adicionar == "s"){   
    for (i=0; i<numQuestoes;i++){
        // SELEÇÃO DAS QUESTÕES
// Especificação das características da questão

        var nomeDisciplina = input("Digite o nome da disciplina da prova: ");// Seleção da disciplina
        var serieDisciplina = input("Digite a série: ");
        var assuntoDisciplina = input("Digite o assunto: ");
        var dificuldadeDisciplina = input("Digite a dificuldade da questão: ");
        var quantidadeAlternativas = input("Digite o número de opções na questão: ");


// Busca das questões elegíveis + Sorteio de uma para ser utilizada, pois pode haver mais de uma opção após serem especificados as características das questões
    }
}
var questoesElegiveis = [];
j=0;

for (i=0; i<listaQuestoes.length; i++) {
    if ((listaQuestoes[i].disciplina == nomeDisciplina) && (listaQuestoes[i].serie == serieDisciplina) 
    && (listaQuestoes[i].assunto == assuntoDisciplina) &&(listaQuestoes[i].dificuldade == dificuldadeDisciplina)){
        questoesElegiveis[j]=listaQuestoes[i];
         j++;
    }
}
 console.log("As questões elegíveis são: ",questoesElegiveis);

var pos = Math.floor(Math.random() * questoesElegiveis.length);

var questaoSorteada = questoesElegiveis[pos];
console.log("A questão sorteada nos critérios determinados é: ",questaoSorteada);


// Sorteio das alternativas para a questão sorteada
// questaoProva = questaoSorteada.alternativa

var listaPosicoes =[]; //armazena as posições randômicas das alternativas que serão colocadas na questão
qtdAlternativas = questaoSorteada.numAlternativas; //quantidade de alternativas que a questão sorteada possui.
for (i=0; i<quantidadeAlternativas; i++){ 
    posOpcao = Math.floor(Math.random() * qtdAlternativas);
    listaPosicoes[i] = posOpcao;
}

//Resolvendo a repetição das alternativas no vetor das opções de resposta
//Se o indexof retorna negativo é porque o elemento não está presente, logo se é >=0 ele já se encontra.
//enquanto for elemento repetido ele faz novamente a randomização
while (listaPosicoes.indexOf(posOpcao)!= 1){ 
    posOpcao = Math.floor(Math.random() * qtdAlternativas) 
}

var questaoProva = {
    enunciado : "",
    alternativa : []
};

var gabaritoQuestaoProva ={
    gabarito : []
}

questaoProva.enunciado = questaoSorteada.enunciado;
for (k=0; k<listaPosicoes.length; k++){
    questaoProva.alternativa[k] = questaoSorteada.alternativa[listaPosicoes[k]];
    gabaritoQuestaoProva.gabarito[k] = questaoSorteada.resposta[listaPosicoes[k]]
    prova[k] = questaoProva;
}

console.log("A prova é: ",prova);

}
}














