// Tipos de dados
// Primitivos: number, string, boolean, null, undefined, symbol
// Referenciais: object, array, function, date, regexp, error

/* Coerção de tipos */ console.log(
  "************** Coerção de tipos ************"
);

let number = 10;
let numberTexto = "20";

let numberMaisTexto = number + numberTexto;
console.log(numberMaisTexto); // 1020

let numnerMenosTexto = number - numberTexto;
console.log(numnerMenosTexto); // -10

/* Boolean */ console.log("************ Boolean ***************");

let booleano = true;
let booleanoFalso = false;
console.log(booleano);
console.log(booleanoFalso);

/* Object */ console.log("*************** Object ***************");

let objeto = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo",
};


console.log(objeto);
console.log(objeto.nome);
console.log(objeto.idade);
console.log(objeto.cidade);

const pessoa = {
    nome: 'Daniel',
    idade: 43,
    profissao: 'Programador',
    hobbies: ['leitura', 'esportes', 'jogos'],
    falar: function () {
        console.log(`Olá meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}. Meus hobbies são ${this.hobbies} mas gosto mais de ${this.hobbies[1]}`);
    }
}
pessoa.falar()
/* Numbers, Strings, Symbol */; console.log('**************** Numbers, Strings, Symbol ***********');

let numero = 10;
let string = "10";
let symbol = Symbol("symbol");

console.log(numero);
console.log(string);
console.log(symbol);


