class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor
    }

    sacar(valor){
        if (valor > this._saldo) {
            return 'Operação Negada'
        }
        this._saldo = this._saldo - valor;

        return this._saldo
    }

    depositar(valor) {
        this.saldo = this._saldo + valor;
        return this._saldo;
    }
}

class contaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this.cartaCredito = cartaCredito;
    }

    get cartaCredito() {
        return this._cartaoCredito;
    }

    set cartaCredito(valor) {
        this._cartaoCredito = valor
    }
}

class contaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupanca';
    }
}

class contaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor) {
        if(valor > 500) {
            return 'Operação negada.'
        }

        this._saldo = this._saldo - valor;
    }

}