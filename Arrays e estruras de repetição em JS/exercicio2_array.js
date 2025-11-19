// Crie um programa que percorra uma lista e imprima cada número par encontrado.
let listaNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < listaNumeros.length; i++) {
    let numero = listaNumeros[i];
    if (numero % 2 === 0) {
        console.log(`O numero ${numero} é par!`);
    }   
}



