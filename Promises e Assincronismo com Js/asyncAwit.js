const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "tarefas.csv");

async function buscaArquivo() {
  try {
    const arquivo = await fs.promises.readFile(filePath);
    const textoDoArquivo = arquivo.toString("utf-8")
    console.log(textoDoArquivo);
  } catch (error) {
    console.log('Erro ao receber dados', error);
    
  } finally {
    console.log("Terminou");
  }
}

buscaArquivo();
