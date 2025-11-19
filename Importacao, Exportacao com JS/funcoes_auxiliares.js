const entradas = [11, 5, 50, 77, 98, 23, 68, 99, 20, 25, 106, 200]
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print}
