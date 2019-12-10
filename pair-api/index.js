const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const AWS = require("aws-sdk");

// import * as arterraWines from "./db/virginiaWine/arterraWines";
// const test = require("./db/virginiaWine/arterraWines");
// import arterraWines from "./db/virginiaWine/arterraWines";

app.use(bodyParser.json({ strict: false }));

app.get("/pair/wine", (req, res) => {
  res.send({
    success: "true",
    message: [
      {
        name: "Reserve",
        wineType: "red",
        dry: true,
        sweet: false,
        flavorProfile: ["full bodied"],
        imageLink:
          "https://images.pexels.com/photos/268858/pexels-photo-268858.jpeg?cs=srgb&dl=clean-clear-close-up-268858.jpg&fm=jpg",
        fruitFlavorProfile: ["black fruit"],
        winery: "Arterra Wines",
        city: "Delaplane",
        state: "VA",
        tags: [
          "cabernet sauvignon",
          "tannat",
          "petit verdot",
          "cabernet franc"
        ],
        foodPair: []
      },
      {
        name: "Reserve",
        wineType: "red",
        dry: true,
        sweet: false,
        flavorProfile: ["full bodied"],
        imageLink:
          "https://images.pexels.com/photos/268858/pexels-photo-268858.jpeg?cs=srgb&dl=clean-clear-close-up-268858.jpg&fm=jpg",
        fruitFlavorProfile: ["black fruit"],
        winery: "Arterra Wines",
        city: "Delaplane",
        state: "VA",
        tags: [
          "cabernet sauvignon",
          "tannat",
          "petit verdot",
          "cabernet franc"
        ],
        foodPair: []
      }
    ]
  });
});

module.exports.handler = serverless(app);
