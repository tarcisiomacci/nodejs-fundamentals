// const { Person } = require("./person");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();

// require("./modules/fs");
// require("./modules/path");

// const person = new Person("Tarcisão");

//console.log(person.sayMyName());

// require("./modules/http");

require("./modules/express");
