/* Código condição de pagemento:
1 - À vista Débito, recebe 10% de desconto
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto
3 - Em duas vezes, preço normal de etiqueta sem juros
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%

Escreva uma função que receba o valor total da compra e a condição de pagamento (1, 2, 3 ou 4) e retorne o valor final a ser pago pelo cliente. */

function defineDesconto(condicaoPagamento, valorTotal) {
    if (condicaoPagamento === 1) {
        return (valorTotal * 0.9).toFixed(2);
    } else if (condicaoPagamento === 2) {
        return (valorTotal * 0.85).toFixed(2);
    } else if (condicaoPagamento === 3) {
        return valorTotal;
    } else if (condicaoPagamento === 4) {
        return (valorTotal * 1.1).toFixed(2);
    } else {
        return "Condição de pagamento inválida.";
    }
}

console.log(defineDesconto(2, 100));