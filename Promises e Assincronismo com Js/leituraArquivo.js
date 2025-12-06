/* import { readFile, readFileSync } from "fs";

const lerArquivo = () => {
  return new Promise((resolve, reject) => {
    readFile("tarefas.csv", "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const lerArquivoSync = () => {
  return readFileSync("tarefas.csv", "utf8");
};

export default {
  lerArquivo,
  lerArquivoSync,
};

const data = lerArquivoSync();
console.log(data);
console.log(lerArquivo); */

const fs = require("fs");
const path = require("path");
const filePath = path.resolve(__dirname, "tarefas.csv");

const promessaDeLeituraArquivo = fs.promises.readFile(filePath);

promessaDeLeituraArquivo
  .then((arquivo) => arquivo.toString('utf-8'))
  .then((texto) => texto.split('\n').splice(1))
  .then(linhas => linhas.map(linha => {
    const [nome, feita] = linha.split(';');
    return { nome, feita: feita.trim() === 'true' };
  }))
  .then(tarefas => console.log(tarefas))
  .catch((err) => {
    console.error("Erro ao ler o arquivo:", err);
  });
