const nota1 = 7;
const nota2 = 7;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
  console.log(`Sua nota final foi ${media}, você foi Reprovado`);
} else if (media >= 5 && media <= 7) {
  console.log(`Sua nota final foi ${media}, você está de Recuperação`);
} else {
  console.log(`Sua nota final foi ${media}, você está Aprovado`);
}
