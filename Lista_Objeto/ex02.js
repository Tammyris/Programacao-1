//declarando a classe
class Calcular{
    constructor(valor1, valor2,operacao){
        this.valor1 = valor1;
        this.valor2 = valor2;
        this.operacao = operacao;
    }
    //setter
    set Valor1(Valor1){
        this.valor1 = Valor1
    }
    set Valor2(Valor2){
        this.valor2 = Valor2
    }
    set Operacao(Operacao){
        this.operacao = Operacao
    }
    //getter
    get Valor1(){
        return this.valor1
    }
    get Valor2(){
        return this.valor2
    }
    get Operacao(){
        return this.operacao
    }
    get resultado(){
        return this.efetuar()
    }
    efetuar(){
        if (this.operacao == 'somar'){
            return parseInt(this.valor1 + this.valor2)
        }
        if (this.operacao == 'subtrair'){
            return parseInt(this.valor1 - this.valor2)
        }
        if (this.operacao == 'multiplicar'){
            return parseInt(this.valor1 * this.valor2)
        }
        if (this.operacao == 'dividir'){
            return parseInt(this.valor1 / this.valor2)
        }
    }

}

let Calculo1 = new Calcular();
Calculo1.Valor1 = 5
Calculo1.Valor2 = 10
Calculo1.Operacao = 'dividir'
console.log(Calculo1.resultado)