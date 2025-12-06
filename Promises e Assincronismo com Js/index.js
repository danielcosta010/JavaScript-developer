const promessa = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise iniciada");
    const numero = parseInt(Math.random() * 100);
    resolve(numero);
  }, 2000);
});

console.log("Antes do primeiro then");

promessa
  .then((res) => {
    console.log("Primeiro then:", res);
    return res * 2;
  })
  .then((res) => {
    console.log("Segundo then:", res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Finalmente");
  });