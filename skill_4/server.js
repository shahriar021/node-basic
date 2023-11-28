const http = require("http");

const myserver = http.createServer((req, res) => {
  res.end("hey i'm from server....");
});

myserver.listen(5000, () => {
  console.log("server is running on 5000.....");
});
