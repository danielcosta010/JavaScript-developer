const preco = 100;
const tipoDePagamento = "pix";

if (tipoDePagamento === "debito") {
  const precoNoDebito = preco - preco * 0.1;
  console.log(`O preco para pagameto no debito é R$${precoNoDebito}`);
} else if (tipoDePagamento === "dinheiro" || tipoDePagamento === "pix") {
  const precoNoDinheiroOuPix = preco - preco * 0.15;
  console.log(
    `O preco para pagameto no dinheiro ou pix é R$${precoNoDinheiroOuPix}`
  );
} else if (tipoDePagamento === "2x") {
  console.log(`O preco para pagameto em 2x é R$${preco}`);
} else {
  const precoEmMaisDe2x = preco + preco * 0.1;
  console.log(`O preco para pagameto em mais de 2x é R$${precoEmMaisDe2x}`);
}

// segunda resolução

let precoFinal;

if (tipoDePagamento === "debito") {
  precoFinal = preco - preco * 0.1;
} else if (tipoDePagamento === "dinheiro" || tipoDePagamento === "pix") {
  precoFinal = preco - preco * 0.15;
} else if (tipoDePagamento === "2x") {
  precoFinal = preco;
} else {
  precoFinal = preco + preco * 0.1;
}
console.log(`O preco final é R$${precoFinal}`);