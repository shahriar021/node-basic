const express = require("express");



const app = express();

const PORT = 6001;

const firstMiddleware = (req, res, next) => {
  console.log("this is middleware");
  console.log((req.currentTime = new Date(Date.now())));
  next();
};

app.get("/", firstMiddleware, (req, res) => {
  console.log("home page");
  res.send("hellow");
});

app.listen(PORT, () => {
  console.log(`server started........ at http://localhost:${PORT}`);
});
