export class Veiculo {
    qtdRodas:number;
    motor:number;
    qtdBancos: number;
    
    constructor(qtdRodas:number, motor:number, qtdBancos:number) {
        this.qtdRodas = qtdRodas;
        this.motor = motor;
        this.qtdBancos = qtdBancos;
    }
    
    informacoesVeiculo():void {
        console.log("Oveiculo possui " + this.qtdRodas + " Rodas, motor " + this.motor + " e " + this.qtdBancos + " bancos");
    }
    
    acelerar(velocidade:number){
        console.log("essa é a velocidade atual" + velocidade);
    }
}