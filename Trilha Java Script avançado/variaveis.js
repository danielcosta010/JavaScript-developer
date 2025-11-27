// O Js é uma linguagem de tipagem fraca
// Não é necessário declarar o tipo da variável
// O Js é case sensitive, ele não distingue entre maiúsculas e minúsculas

console.log('************** Variagem e comportamentos ********************');

var numero = 10;

var texto = 'texto';

var numeroTexto = '20';
var booleano = true;

console.log(numero + texto);
console.log(numero - texto);
console.log(numero + numeroTexto);

console.log(typeof numero);
console.log(typeof texto);
console.log(typeof numeroTexto);
console.log(typeof booleano);

var variavelNaoDeclarada;
console.log(typeof variavelNaoDeclarada);

// O hoisting em Js é o fenômeno pelo qual as declarações de variáveis e funções são movidas para o topo do seu escopo, antes da execução do código.

console.log('************** Parte de Hoisting********************');


teste();

function teste() {
    console.log('Função teste chamada antes');
}

console.log(variavelDeclaradaDepois);
var variavelDeclaradaDepois = 'Fui declarada depois de ser usada';

console.log('************** Diferenças entre let, var e Const********************');

// var é uma variável de escopo global ou de função, ele vasa por exemplo dentro de um if

if (true) {
    var variavelVarIf  = 'Estou dentro de um if e fui chamada fora';
}

console.log(variavelVarIf);

function testVar() {
    var variavelVarFunction = 'Estou dentro de uma função';
}

testVar();
// console.log(variavelVarFunction); retorna variavelVarFunction is not defined

// let é uma variável de escopo de bloco, ele não vasa por exemplo dentro de um if

if (true) {
    let variavelLetIf = 'Estou dentro de um if e fui chamada fora';
}

// console.log(variavelLetIf); retorna variavelLetIf is not defined

// const é uma variável de escopo de bloco, ela é imutável 
const variavelConst = 'Sou variavel const e ão posso ser alterada';
variavelConst = 'Tentei alterar';
// console.log(variavelConst); retorna TypeError: Assignment to constant variable.

