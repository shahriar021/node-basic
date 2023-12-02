const express = require("express");

const app = express();

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

app.listen(5000);
