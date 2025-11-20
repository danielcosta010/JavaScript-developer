const numeros = [5, 3, 1, 4, 10, 8];

let i = 0;

function gets() {
  const valor = numeros[i];
  i++;
  return valor;
}

function print(texto) {
  console.log(texto);
}


module.exports = { gets, print };
