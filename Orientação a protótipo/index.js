//* Orientação a protótipo */

const pessoa = {
    genero: 'masculino'
}

const daniel = {
    nome: 'Daniel',
    proffissao: 'Programador',
    __proto__: pessoa
}

pessoa.idade = 43;

console.log(`Olá meu nome é ${pessoa.nome} e sou ${pessoa.proffissao}`);
console.log(pessoa);
console.log(daniel);

/* Funções construtoras */

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.falar = function() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos venho da function`);
    }
}

const isabellaFunction = new Pessoa('Isabella', 11)
console.log(isabellaFunction);

isabellaFunction.falar();

/* Classe */

class PessoaClass {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;

        this.falar = function () {
            console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos venho da class`);
        };
    }
}

const isabellaClass = new PessoaClass('Isabella', 11);
isabellaClass.falar();

/* Enriquecimento de strings (naõ aconselhavel, só para entendimento) */
String.prototype.tamanho = function() {
    return this.length;
}

console.log('Isabella'.tamanho());
console.log('Isabella'.length);

