console.log('Ola Daniel, bem vindo devolta');

//Primeiro desafio
let precoCombustivel = 5.49;
let consumoVeiculo = 15;
let distanciaViagemEmKm = 740;

let distanciaXconsumo = distanciaViagemEmKm / consumoVeiculo;
let valorGasto = distanciaXconsumo * precoCombustivel;

console.log(`Você irá gastar R$${valorGasto.toFixed(2)}`);
