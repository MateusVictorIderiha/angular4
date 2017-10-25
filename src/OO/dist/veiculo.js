"use strict";
exports.__esModule = true;
var Veiculo = (function () {
    function Veiculo(qtdRodas, motor, qtdBancos) {
        this.qtdRodas = qtdRodas;
        this.motor = motor;
        this.qtdBancos = qtdBancos;
    }
    Veiculo.prototype.informacoesVeiculo = function () {
        console.log("Oveiculo possui " + this.qtdRodas + " Rodas, motor " + this.motor + " e " + this.qtdBancos + " bancos");
    };
    Veiculo.prototype.acelerar = function (velocidade) {
        console.log("essa é a velocidade atual" + velocidade);
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
