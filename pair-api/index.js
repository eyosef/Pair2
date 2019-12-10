const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

// import * as arterraWines from "./db/virginiaWine/arterraWines";
const arterraWines = require("./db/virginiaWine/arterraWines");
// import arterraWines from "./db/virginiaWine/arterraWines";

app.use(bodyParser.json({ strict: false }));

app.get("/pair/wine", (req, res) => {
  res.send({
    success: "true",
    message: arterraWines
  });
});

module.exports.handler = serverless(app);
