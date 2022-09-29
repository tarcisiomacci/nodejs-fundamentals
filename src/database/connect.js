const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsbasic.qalleof.mongodb.net/database?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log("Deu um erro aqui mano: ", error);
      }

      console.log("Ta conectado no Database");
    }
  );
};

module.exports = connectToDatabase;
