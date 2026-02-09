const express = require("express");
const add = require("./routes/math");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Node.js Docker Demo App!");
});

app.get("/add", (req, res) => {
  const result = add(5, 7);
  res.json({ sum: result });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});