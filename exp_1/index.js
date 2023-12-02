const app = require("./app");

app.listen(5000, (req, res) => {
  console.log("server is running...");
});

app.get("/home", (req, res) => {
  // res.send("server is sending you some gifts...take it .......");
  // res.redirect("/status");
  res.sendFile(__dirname + "/views/login.html");
});

app.get("/status", (req, res) => {
  res.status(206).json({
    name: "shahriar",
    sms: "nothing",
    statusCode: 206,
  });
});

app.get("/cookies", (req, res) => {
  // res.cookie("shahriar", "25");
  res.clearCookie("shahriar");
  res.append("id", "423");
  res.end();
});

// app.use((req, res, next) => {
//   res.send("404 page not found.......");
// });
