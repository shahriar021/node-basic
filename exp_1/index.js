const app = require("./app");

app.listen(5000, (req, res) => {
  console.log("server is running...");
});

app.get("/home", (req, res) => {
  res.send("server is sending you some gifts...take it .......");
});
