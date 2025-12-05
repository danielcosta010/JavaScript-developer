// const listaString = ["Daniel", "João", "Maria"];
// const listaNumber = [1, 2, 3, 4, 5];

// console.log(listaString);

// /* ForEach */
// listaString.forEach((value, i, array) => {
//   console.log(value, i, array);
// });

// console.log(listaNumber);

// /* Filter */
// const numerosMaior2 = listaNumber.filter((value, i, array) => {
//   return value > 2;
// });

// console.log(numerosMaior2);

// /* Map */
// class Pessoa {
//   constructor(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//   }
// }

// const listaPessoa = [
//   new Pessoa("Daniel", 25),
//   new Pessoa("João", 30),
//   new Pessoa("Maria", 20),
//   new Pessoa("Pedro", 22),
//   new Pessoa("Diego", 28),
//   new Pessoa("Dimas", 55),
// ];

// const listaNomes = listaPessoa.map((element) => {
//   return `${element.nome} - ${element.idade}`;
// });

// console.log(listaNomes);

// /* Reduce */
// const somaIdades = listaPessoa.reduce((acumulador, elemento) => {
//   return acumulador + elemento.idade;
// }, 0);

// console.log(somaIdades);

// /* Find */
// const pessoaEncontrada = listaPessoa.find((elemento) => {
//   return elemento.nome === "Daniel";
// });

// /* Map, Filter, Join */

// console.log(pessoaEncontrada);

// console.log(
//   listaPessoa
//     .map((e) => e.nome).filter((e) => e.startsWith('D')).join(", ")
// );


const lista = [1, 2, 3, 4, 5];
const lista2 = lista.map((e) => e * 2);
console.log(lista2);
