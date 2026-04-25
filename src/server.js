const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "API Node.js publicada no Elastic Beanstalk"
  });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(8080, () => {
  console.log(`Servidor rodando na porta 8080`);
});