const serverless = require("serverless-http");
import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({
    success: "true",
    message: "VA Wine retrieved successfully"
    // virginiaWine: virginiaWine //temporary
  });
});

module.exports.handler = serverless(app);
