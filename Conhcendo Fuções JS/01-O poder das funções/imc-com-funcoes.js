function calcularIMC(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificaImc(imc) {
  if (imc < 18.5) {
    return `Seu IMC (índice de massa corporal) é ${imc}, você está abaixo do peso.`;
  } else if (imc >= 18.5 && imc < 25) {
    return `Seu IMC (índice de massa corporal) é ${imc}, você está dentro do peso.`;
  } else if (imc >= 25 && imc < 30) {
    return `Seu IMC (índice de massa corporal) é ${imc}, você está acima do peso.`;
  } else if (imc >= 30 && imc < 40) {
    return `Seu IMC (índice de massa corporal) é ${imc}, você está obeso.`;
  } else {
    return `Seu IMC (índice de massa corporal) é ${imc}, você com obesidade mórbida.`;
  }
}

// function main() {
//   const peso = 70;
//   const altura = 1.65;
//   const imc = calcularIMC(100, 1.65);
//   console.log(classificaImc(imc));
// }

(function () {
  const peso = 70;
  const altura = 1.65;
  const imc = calcularIMC(100, 1.65);
  console.log(classificaImc(imc));
})();
