/* First Class Functions, Higher Order Functions, Function Declaration e Function Expression */
souUmaFuncaDePrimeiraCalasse();

function souUmaFuncaDePrimeiraCalasse() {
    console.log('Sou uma função de primeira classe e sou içada(sofro hoisting) olha eu sendo chamada antes de ser declarada');
}


const funcaoAnonima = function() {
    console.log('Sou uma função anônima e não sou içada, tenho que  ser chamada depois de ser declarada');
}
funcaoAnonima();


const funcaoArrow = () => {
    console.log('Sou uma função arrow e não sou içada, tenho que ser chamada depois de ser declarada');
}

funcaoArrow();


/* Closure ou Fechamentos */

function  soma(x) {
    return function(y) {
        return x + y;
    }
}

const somaParcial = soma(10);
console.log(somaParcial(20));

const somaParcial2 = soma(5);
console.log(somaParcial2(15));

const somaParcial3 = soma(20);
console.log(somaParcial3(30));

/* Invocação Direta, Call, Apply e Operador New */

const pessoa = {
    nome: 'Daniel',
    idade: 30
}

function gritar() {
    console.log('Oi, meu nome é ' + this.nome + ' e eu tenho ' + this.idade + ' anos');
}
    gritar.call(pessoa); // lê normalmente
    gritar.apply(pessoa); // lê normalmente
    gritar.bind(pessoa)(); // lê normalmente
    gritar(); // não reconhece o context this
    gritar.call({nome: 'João', idade: 25}); // sobrescreve os valores nome e idade
    gritar.apply({nome: 'João', idade: 25}); // sobrescreve os valores nome e idade
    gritar.bind({nome: 'João', idade: 25})(); // sobrescreve os valores nome e idade

    new gritar();


/* Callbacks funções chamadas como argumentos */

function calcular(x, operacao, y) {
    console.log(operacao(x, y));    
}

function adicao(x, y) {
    return x + y;
}
function multiplicacao(x, y) {
    return x * y;
}

calcular(10, adicao, 20);
calcular(10, multiplicacao, 20);

/* Exemplo da manipulação do dom */

/* document.getElementById('botal').addEventListener('click', () => {
    console.log('Clicou botão 1');
    
}) */

const obj = {}
const arr = []

obj['nome'] = 'Daniel';
arr.push('Daniel');
arr.push('João');
arr.push('Maria');

console.log(obj);
console.log(arr);


console.log(typeof obj);
console.log(typeof arr);
