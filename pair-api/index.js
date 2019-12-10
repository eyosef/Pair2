const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const virginiaWine = require("./db/virginiaWine");

debugger;

app.use(bodyParser.json({ strict: false }));

app.get("/pair/wine", (req, res) => {
  res.send({
    success: "true",
    message: virginiaWine
  });
});

module.exports.handler = serverless(app);
