class Pessoa {
    nome;
    profissao;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} tenho ${this.idade} anos sou ${this.profissao}`);
    }
}

const daniel = new Pessoa();
daniel.nome = 'Daniel Costa';
daniel.profissao = 'Programador';
daniel.idade = 42;

const polliana = new Pessoa();
polliana.nome = 'Poliiana Costa';
polliana.profissao = 'Fisioterapeuta';
polliana.idade = 43;

const isabella = new Pessoa();
isabella.nome = 'Isabella Costa';
isabella.profissao = 'Juiza de Direito';
isabella.idade = 24;

daniel.descrever();
polliana.descrever();
isabella.descrever();

console.log(daniel);


class Carro {
    marca;
    modelo;
    ano;
    tempoDeUso;

    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.tempoDeUso = new Date().getFullYear() - ano;
    }

    descrever() {
        console.log(`Meu carro é um ${this.marca} modelo ${this.modelo} do ano ${this.ano} e tem ${this.tempoDeUso} anos de uso.`);
    }
}

const carro1 = new Carro('Chevrolet', 'Onix', 2020);
const carro2 = new Carro('Ford', 'Ka', 2018);

carro1.descrever();
carro2.descrever();


console.log(carro1);
console.log(carro2);


function comparraPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p1.idade < p2.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade.`);
    }
}

comparraPessoas(daniel, polliana);
comparraPessoas(daniel, isabella);
comparraPessoas(polliana, isabella);