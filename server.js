const express = require("express");

const port = 7000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Server listening on ${port}.`);
});
