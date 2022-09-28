const express = require("express");

const app = express();

const port = 8080;

app.get("/home", (req, res) => {
  res.status(200).send("<h1>Welcome to my home page</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "John Doe",
      email: "john@doe.com",
    },
    {
      name: "Elen Smith",
      email: "elen@smith.com",
    },
  ];
  res.status(200).json(users);
});

app.listen(port, () => {
  console.log(`Running on Port ${port}`);
});
