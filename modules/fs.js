const fs = require("fs");
const path = require("path");

// cria uma pasta dentro d diretorio
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("Erro: " + error);
//   }

//   console.log("Sucessfully created test folder");
// });

// cria um arquivo com conteudo dentro d diretorio
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello! I was created automatically from the fs module.",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Sucessfully created test.txt file");

    // Adiciona um conteudo à um arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      "Mas rapaz! Adicionou mesmo!",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log("Sucessfully appended text to  test.txt file");
      }
    );

    // Ler um conteudo dentro de um arquivo
    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf-8",
      (error, data) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log(data);
      }
    );
  }
);
