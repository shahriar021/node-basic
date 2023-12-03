const express = require("express");

require("dotenv").config();

const app = express();

const PORT = 6001;
const s = process.env.SOMETHING;

app.get("/", (req, res) => {
  res.send("hellow");
});

app.get("/home", (req, res) => {
  res.send(s);
});

app.listen(PORT, () => {
  console.log(`server started........ at http://localhost:${PORT}`);
});
