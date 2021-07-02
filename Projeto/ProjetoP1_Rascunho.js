input = require("prompt-sync")();

//-------------------------------------------------------------------------------------------------------
// CADASTRO DE QUESTÕES
listaQuestoes = [
    {disciplina: "Matematica", professor: "Simeao", serie: "3", assunto: "Geometria Espacial", dificuldade: "1", enunciado: "Qual é o volume de um cubo de aresta 2?", alternativa: [1,8,12,5,7,14,22,50,21,100], resposta: ["F","V","F","F","F","F","F","F","F","F"]},
    {disciplina: "Matematica", professor: "Tammyris", serie: "1", assunto: "Geometria Plana", dificuldade: "1", enunciado: "Qual a área de um quadrado de lado 2?", alternativa: [1,4,12], resposta: ["F","V","F"]},
    {disciplina: "Historia", professor: "Joana", serie: "1", assunto: "Historia do Brasil", dificuldade: "1", enunciado: "Quem descobriu o Brasil", alternativa: ["Fausto Silva","Fernando Henrique Cardoso","Pedro Álvares Cabral", "Tammyris Carvalho", "Marcos Vinícius"], resposta: ["F","F","V","F","F"]}
]

//-------------------------------------------------------------------------------------------------------
// ELABORAÇÃO DA PROVA

// Seleção da disciplina
var nomeDisciplina = input("Digite o nome da disciplina da prova: ");

// // Especificação das características da questão
var serieDisciplina = input("Digite a série: ");
var assuntoDisciplina = input("Digite o assunto: ");
var dificuldadeDisciplina = input("Digite a dificuldade da questão: ");
var quantidadeAlternativas = input("Digite o número de opções na questão: ");

// // Busca das questões elegíveis + Sorteio de uma para ser utilizada 
var questoesElegiveis = [];
j=0;

for (i=0; i<=2; i++) {
    if ((listaQuestoes[i].disciplina == nomeDisciplina) && (listaQuestoes[i].serie == serieDisciplina) &&
    (listaQuestoes[i].assunto == assuntoDisciplina) && (listaQuestoes[i].dificuldade == dificuldadeDisciplina)) {
        questoesElegiveis[j]=listaQuestoes[i];
        j++;
    }
}

var pos = Math.floor(Math.random() * questoesElegiveis.length);
questaoSorteada = {
}
console.log(questaoSorteada);
var questaoSorteada = questoesElegiveis[pos];

// Sorteio das alternativas para a questão sorteada

// questaoProva = questaoSorteada.alternativa
var listaPosicoes =[];

qtdAlternativas = questaoSorteada.alternativa.length;
for (i=0; i<quantidadeAlternativas; i++){
    posOpcao = Math.floor(Math.random() * qtdAlternativas);
    listaPosicoes[i] = posOpcao;
}

questaoProva = {
    enunciado : "",
    alternativa : [],
    gabarito : []
};

questaoProva.enunciado = questaoSorteada.enunciado;
for (k=0; k<listaPosicoes.length; k++){
    questaoProva.alternativa[k] = questaoSorteada.alternativa[listaPosicoes[k]];
    questaoProva.gabarito[k] = questaoSorteada.resposta[listaPosicoes[k]]
}
console.log(questaoProva);




