const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const virginiaWine = require("./db/virginiaWine");

const helper = require("./db/utils/helpers");

app.use(bodyParser.json({ strict: false }));

app.get("/pair/wine", (req, res) => {
  res.send({
    success: "true",
    virginiaWine: virginiaWine,
    redWine: helper.filterByWineType(virginiaWine, "red"),
    whiteWine: helper.filterByWineType(virginiaWine, "white")
  });
});

// const PORT = 5000;

// app.listen(PORT, () => {
//   console.log(`server running on port ${PORT}`);
// });

module.exports.handler = serverless(app);
