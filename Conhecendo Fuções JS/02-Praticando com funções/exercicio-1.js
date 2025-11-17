function escrevaMeuNome(nome) {
  return `Meu nome é ${nome}`;
}
escrevaMeuNome("Daniel");

(function voceEhMaiorDeIdade(idade) {
if (idade >= 18) {
    console.log(` ${escrevaMeuNome('Daniel')} tenho ${idade} anos e sou maior de idade`);
} else {
    console.log('Você é menor de idade');
}
})(42);
