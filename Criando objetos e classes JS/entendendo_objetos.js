const eu = {
    nome: 'Daniel',
    profissao: 'Programador',
    idade: 25,
}

console.log(eu.nome);
console.log(eu.profissao);
console.log(eu.idade);

eu.altura = 1.68;
console.log(eu.altura);

delete eu.altura;
console.log(eu.altura);

const pessoa = {
    nome: 'Daniel Costa',
    profissao: 'Programador',
    idade: 42,

    descrever: function() {
        console.log(`Meu nome é ${this.nome} tenho ${this.idade} anos sou ${this.profissao}`);
    }
};

pessoa.descrever();

pessoa['nome']