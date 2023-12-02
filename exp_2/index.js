const express = require("express");

const app = express();

var bodyParser = require("body-parser");

// create application/json parser
app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

//query parameter

// app.get("/", (req, res) => {
//   //   const id = req.query.id;
//   //   const age = req.query.age;
//   const { id, age } = req.query;
//   res.send(`your id is ${id} and your age is ${age}`);
// });

app.get("/userId/:id/userAge/:age", (req, res) => {
  //   const id = req.params.id;
  //   const age = req.params.age;
  const { id, age } = req.params;
  res.send(`your id is ${id} and your age is ${age}`);
});

app.post("/user", (req, res) => {
  const name = req.body.name;
  res.send(`your name is ${name}`);
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/register", (req, res) => {
  const name = req.body.nickName;
  res.send(`your name is ${name}`);
});

app.listen(5000);
