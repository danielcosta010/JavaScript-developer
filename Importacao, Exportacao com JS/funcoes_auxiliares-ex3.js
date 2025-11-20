const salarioBeneficio = [4900, 550.00]

let i = 0;

function gets() {
  const valor = salarioBeneficio[i];
  i++;
  return valor;
}

function print(texto) {
  console.log(texto);
}


module.exports = { gets, print };
