const http = require("http");

const myserver = http.createServer((req, res) => {
  res.writeHead(205, { "Content-Type": "text/plain" });
  res.write("writing something from server");
  res.end();
});

myserver.listen(5000, () => {
  console.log("server is running on 5000.....");
});
