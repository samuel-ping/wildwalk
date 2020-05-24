require("dotenv").config();

const express = require("express");
const app = express();
const axios = require("axios");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));

const uri = process.env.MONGODB_ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;

// returns list of native species according to user's location
app.post("/api/plants", (req, res) => {
  var location = JSON.parse(JSON.stringify(req.body)).location;
  var resultsSummary = null;
  var results = null;
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

const speciesEntryRouter = require("./routes/speciesEntry");
app.use("/speciesEntry", speciesEntryRouter);

// adds photo and species to database

app.listen(port, () => console.log(`Server running on port ${port}`));
