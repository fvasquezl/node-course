const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;

  res.send("The result of calculation is: " + result);
});

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmicalculator.html");
});
app.post("/bmicalculator", (req, res) => {
  let kg = Number(req.body.weight);
  let m = Number(req.body.height);
  let bmi = kg / (m * m);
  res.send("Your BMI is: " + bmi);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
