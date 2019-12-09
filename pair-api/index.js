const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

app.use(bodyParser.json({ strict: false }));

app.get("/pair/wine", function(req, res) {
  res.send({
    success: "true",
    message: "Hello World!"
  });
});

module.exports.handler = serverless(app);
