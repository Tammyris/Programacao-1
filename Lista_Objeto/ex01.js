//declarando a classe

class Idade{
    constructor(anoNascimento, anoAtual){
        this.anoNascimento = anoNascimento;
        this.anoAtual = anoAtual;
    }

    //setter
    set AnoNascimento(AnoNascimento){
        this.anoNascimento = AnoNascimento
    }
    set AnoAtual(AnoAtual){
        this.anoAtual = AnoAtual
    }
    //getter
    get idade(){
        return this.calcularIdade()
    }
    calcularIdade(){
        return parseInt(this.anoAtual - this.anoNascimento);
    }

}

let Idade1 = new Idade();
Idade1.AnoNascimento = 1987
Idade1.AnoAtual = 2021
console.log(Idade1.idade)