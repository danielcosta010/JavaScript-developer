/* const alunos = ['Daniel', 'Polliana', 'Isabella']

alunos.push('Maria');
alunos[4] = 'Samuel'
console.log(alunos); */

const notas = [];

notas.push(10);
notas.push(7);
notas.push(9);
notas.push(5);
notas.push(2);
notas.push(3);
notas.push(4);

let soma = 0

console.log(notas);
for (let i = 0; i < notas.length; i++) {
    let nota = notas[i]
    soma = soma + nota
}

let media = soma / notas.length
console.log(media);
