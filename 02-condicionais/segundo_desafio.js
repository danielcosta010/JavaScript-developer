const precoEtanol = 3.49;
const precoGasolina = 5.49;
const tipoCombustivel = "etanol";
const gastoGasolinaVeiculoKm = 15;
const gastoEtanolVeiculoKm = 10;
const distanciaViagemKm = 740;

if (tipoCombustivel === "etanol") {
  const gastoEtanol = (
    (distanciaViagemKm / gastoEtanolVeiculoKm) *
    precoEtanol
  ).toFixed(2);
  console.log(`O gasto da viagem com etanol é de R$${gastoEtanol} reais`);
} else {
  const gastoGasolina = (
    (distanciaViagemKm / gastoGasolinaVeiculoKm) *
    precoGasolina
  ).toFixed(2);
  console.log(`O gasto da viagem com gasolina é de ${gastoGasolina} reais`);
}
