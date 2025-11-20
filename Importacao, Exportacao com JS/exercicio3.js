const { gets, print } = require("./funcoes_auxiliares-ex3");

const salario = gets();
const beneficio = gets();

if (salario > 0 && salario <= 1100.00) {
    const total = (salario - (salario * 0.05)) + beneficio;
    print(total)
} else if (salario > 1100.00 && salario <= 2500.00) {
    const total = (salario - (salario * 0.10)) + beneficio;
    print(total)
} else if (salario > 2500.00) {
    const total = (salario - (salario * 0.15)) + beneficio;
    print(total)
} else {
    print("Salário inválido")
}

/* const salarioInput = gets();
const beneficioInput = gets();

const salario = parseFloat(salarioInput);
const beneficio = parseFloat(beneficioInput);

function isValorValido(valor) {
  return !isNaN(valor) && valor > 0;
}

function calcularDesconto(salario) {
  if (salario <= 1100.0) return 0.05;
  if (salario <= 2500.0) return 0.1;
  return 0.15;
}

if (isValorValido(salario) && isValorValido(beneficio)) {
  const desconto = calcularDesconto(salario);
  const total = salario * (1 - desconto) + beneficio;
  print(total.toFixed(2));
} else {
  print("Entrada inválida: informe valores numéricos maiores que zero.");
}
 */