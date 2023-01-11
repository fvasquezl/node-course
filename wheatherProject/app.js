const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const city = "Paris";
  const apiKey = "2a0b47d3c45b4f6dc74ff8d38b6c62bf";
  const webSite = "https://api.openweathermap.org/data/2.5/weather";
  const unit = "metric";

  const url = webSite + "?q=" + city + "&appid=" + apiKey + "&units" + unit;

  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<p>The weather is currently " + weatherDescription + "</p>");
      res.write(
        "<h1>The temperature in " +
          city +
          " is " +
          temp +
          " degrees celcius</h1>"
      );
      res.write("<img src=" + imgURL + ">");

      res.send();
    });
  });
});

app.post("/", (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
