const peso = 70;
const altura = 1.65;

const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log(`Seu IMC (índice de massa corporal) é ${imc}, você está abaixo do peso.`)
} else if(imc >= 18.5 && imc < 25) {
    console.log(`Seu IMC (índice de massa corporal) é ${imc}, você está dentro do peso.`)
} else if (imc >= 25 && imc < 30) {
    console.log(`Seu IMC (índice de massa corporal) é ${imc}, você está acima do peso.`)   
} else if (imc >= 30 && imc < 40) {
    console.log(`Seu IMC (índice de massa corporal) é ${imc}, você está obeso.`)   
} else {
    console.log(`Seu IMC (índice de massa corporal) é ${imc}, você com obesidade mórbida.`)   
}