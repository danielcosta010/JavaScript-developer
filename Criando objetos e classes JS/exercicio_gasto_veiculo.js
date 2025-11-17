/* class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return ((distanciaEmKm / this.gastoMedioPorKm) * precoCombustivel).toFixed(2);
    }

}

const onix = new Carro('Volkswagen', 'Prata', 12);
const custoPercurso = onix.calcularGastoDePercurso(70, 5.79);
console.log(`O veículo ${onix.marca} cor ${onix.cor} gastará R$${custoPercurso} para realizar a viagem`);
console.log(onix); */


class Carro {
    constructor (marca, cor, gastoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }

    gastoDaViagem (distancia, preco) {
        return (distancia / this.gastoPorKm * preco).toFixed(2)
    }
}

const onix = new Carro('Chevrolet', 'Azul', 12);
const valorFinal = onix.gastoDaViagem(217, 5.49)
console.log(`O veiculo ${onix.marca} Onix ${onix.cor} gastou nesta viagem ${valorFinal}`);
