const mediaNota = [-10];

let i = 0;

function gets() {
  const valor = mediaNota[i];
  i++;
  return valor;
}

function print(texto) {
  console.log(texto);
}

module.exports = { gets, print };
