const path = require("path");

// Apenas o nome do arquivo
console.log(path.basename(__filename));

// Apenas o nome da pasta do diretorio atual
console.log(path.basename(__dirname));

// Apenas o nome do diretorio atual
console.log(path.dirname(__filename));

// Apenas a extensão do arquivo atual
console.log(path.extname(__filename));

// Cria objeto Parse
console.log(path.parse(__filename));

// Junta/Cria caminhos para rotas
console.log(path.join(__dirname, "test", "usuario", "index.html"));
