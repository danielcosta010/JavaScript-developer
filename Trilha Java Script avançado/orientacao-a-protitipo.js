function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.falar = function () {
    console.log('************ Vim da função construtora **********');
    console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade}`);
};

const humano = new Pessoa("Daniel", 42);

humano.falar();

// O class é o mesmo que a função construtora acima

class PessoaDaClasse {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    falar() {
        console.log('************ Vim da class **********');
        console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade}`);
    }
}

const daClasse = new PessoaDaClasse('Daniel', 42);
daClasse.falar();
