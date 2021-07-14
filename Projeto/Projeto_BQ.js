input = require("prompt-sync")();

//MENU GERAL
opcao = 0
while (opcao != 3) {
    console.log("----------MENU----------");
    console.log("[1]- Cadastrar Questões");
    console.log("[2]- Elaborar Prova");
    // console.log("[3]- Responder Prova");
    // console.log("[4]- Corrigir Prova");
    console.log("[3]- Sair");
    opcao = parseInt(input("Escolha sua opção: "));

    if (opcao == 1) {
        //CADASTRANDO QUESTÕES
        var listaQuestoes = [];
        pergunta = input("Deseja cadastrar uma questão? Digite [s/n])").toLowerCase();
        while (pergunta == "s") {
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
            };
            questao.disciplina = input("Digite o nome da disciplina: ");
            questao.elaborador = input("Digite o nome do elaborador: ");
            questao.serie = input("Digite a série: ");
            questao.assunto = input("Digite o assunto: ");
            questao.dificuldade = input("Digite a dificuldade (1-Fácil, 2-Intermediário, 3- Difícil): ");
            questao.enunciado = input("Digite o enunciado: ");
            questao.numAlternativas = input("Digite o número de alternativas disponíveis na questão: ");
            for (i = 0; i < questao.numAlternativas; i++) {
                questao.alternativa[i] = input("Digite a alternativa: ");
                questao.resposta[i] = input("Digite a resposta: ");
            };
            listaQuestoes.push(questao);
            pergunta = input("Deseja adicionar mais questão?");
        };
        console.log("Questões disponíveis no banco de questões: ", listaQuestoes);
    }

    else if (opcao == 2) {
        //SELECIONANDO AS QUESTÕES PARA A PROVA
        var prova = []; 
        numQuestoes = parseInt(input("Digite o número de questões da prova: "));
        for (k = 0; k < numQuestoes; k++) {
            // SELEÇÃO DAS QUESTÕES
            // Especificação das características da questão
            var nomeDisciplina = input("Digite o nome da disciplina da prova: ");// Seleção da disciplina
            var serieDisciplina = input("Digite a série: ");
            var assuntoDisciplina = input("Digite o assunto: ");
            var dificuldadeDisciplina = input("Digite a dificuldade da questão: ");
            var quantidadeAlternativas = input("Digite o número de opções na questão: ");
            // Busca das questões elegíveis + Sorteio de uma para ser utilizada, pois pode haver mais de uma opção após serem especificados as características das questões
            var questoesElegiveis = [];
            for (i = 0; i < listaQuestoes.length; i++) {
                if ((listaQuestoes[i].disciplina == nomeDisciplina) && (listaQuestoes[i].serie == serieDisciplina)
                    && (listaQuestoes[i].assunto == assuntoDisciplina) && (listaQuestoes[i].dificuldade == dificuldadeDisciplina)) {
                    questoesElegiveis.push(listaQuestoes[i]);
                }
            }
                console.log("As questões elegíveis são: ", questoesElegiveis);
                var pos = Math.floor(Math.random() * questoesElegiveis.length);
                var questaoSorteada = questoesElegiveis[pos];
                console.log("A questão sorteada nos critérios determinados é: ", questaoSorteada);
        
                // Sorteio das alternativas para a questão sorteada
                // questaoProva = questaoSorteada.alternativa
        
                var listaPosicoes = []; //armazena as posições randômicas das alternativas que serão colocadas na questão
                qtdAlternativas = questaoSorteada.alternativa.length; //quantidade de alternativas que a questão sorteada possui.
                for (j = 0; j < quantidadeAlternativas; j++) {
                    posOpcao = Math.floor(Math.random() * qtdAlternativas);
                    listaPosicoes.push(posOpcao);
                }
                var TEMPORARIO = [];
                TEMPORARIO = questaoSorteada.alternativa;
                //console.log("TEMPORARIO:",TEMPORARIO);
                questaoSorteada.alternativa = [];
                console.log()
                
                for (m=0; m<listaPosicoes.length;m++){
                    questaoSorteada.alternativa.push(TEMPORARIO[listaPosicoes[m]]);
                }
                //Resolvendo a repetição das alternativas no vetor das opções de resposta
                //Se o indexof retorna negativo é porque o elemento não está presente, logo se é !=1 ele já se encontra.
                //enquanto for elemento repetido ele faz novamente a randomização
                while (listaPosicoes.indexOf(posOpcao) != 1) {
                    posOpcao = Math.floor(Math.random() * qtdAlternativas)
                }
        
                var questaoProva = {
                    enunciado: "",
                    alternativa: []
                }
        
                var gabaritoQuestaoProva = {
                    gabarito: []
                }
        
                questaoProva.enunciado = questaoSorteada.enunciado;
                questaoProva.alternativa = questaoSorteada.alternativa;
                gabaritoQuestaoProva.gabarito = questaoSorteada.resposta;
                prova.push(questaoProva);   
        }
         
        console.log("PROVA: ");
        console.log(prova);
    }
    // else if (opcao == 3){
        // for(i=0; i<numQuestoes; i++){
            // resposta = input("Responda a",i+1,"questão:" )
            // for(j=0; j)
        // }
    // }
    // else if (opcao == 4){
    // }
    else if (opcao == 3){
    }
    else{
        console.log("Digite uma opção válida!")
    }
}