const express = require("express");
const app = express();
const axios = require("axios");

// var cors = require("cors");
const port = process.env.PORT || 5000;
app.use(express.json());

var resultsSummary = null;
var results = null;

app.post("/plants", (req, res) => {
  var location = JSON.parse(JSON.stringify(req.body)).location;
  const parameters = {
    criteriaType: "combined",
    locationCriteria: [
      {
        paramType: "subnation",
        subnation: location,
        nation: "US",
      },
    ],
  };

  axios
    .post("https://explorer.natureserve.org/api/data/search", parameters)
    .then((natureRes) => {
      resultsSummary = natureRes.data.resultsSummary;
      results = natureRes.data.results;
      const returnData = {
        summary: resultsSummary,
        results: results,
      };
      console.log(returnData);
      res.json(returnData);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
