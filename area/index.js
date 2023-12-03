const express = require("express");
const app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/area", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/area",(req,res)=>{
    const h=req.body.ht
    const w=req.body.wd
    const r=h*w
    res.send(`your area is ${r}`)
})

app.listen(7000, () => {
  console.log("started......");
});
