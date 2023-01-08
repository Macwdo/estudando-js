// superclass

function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if (valor > this.saldo){
        console.log("Saldo insuficiente : " + "R$" + this.saldo.toFixed(2))
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function(valor){
    console.log(`Ag/c: ${this.agencia}/${this.conta} | R$${this.saldo.toFixed(2)}`)

}

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta , saldo);
    this.limite = limite;
};

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if (valor > (this.saldo + this.limite)){
        console.log("Saldo insuficiente : " + "R$" + this.saldo.toFixed(2))
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call()
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

ContaPoupanca.prototype = new Object(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;


const conta1 = new ContaPoupanca(11, 22, 10)
conta1.sacar(10)
conta1.verSaldo();





