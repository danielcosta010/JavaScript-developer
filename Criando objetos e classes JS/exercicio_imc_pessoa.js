class Pessoa {
  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calculaImc() {
    return (this.peso / Math.pow(this.altura, 2)).toFixed(2);
  }

  classificaImc(imc) {
    if (imc < 18.5) {
      return "Estou abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
      return "Estou com imc normal";
    } else if (imc >= 25 && imc < 30) {
      return "Estou com imc acima do normal";
    } else if (imc >= 30 && imc < 40) {
      return "Estou com obesidade";
    } else {
      return "Estou com obesidade mórbida";
    }
  }
}

const jose = new Pessoa("José", 800, 1.75);
const imc = jose.calculaImc();

console.log(
  `Meu nome é ${jose.nome} e meu IMC é ${imc}, ${jose.classificaImc(imc)}`
);

