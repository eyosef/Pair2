import express from "express";
import bodyParser from "body-parser";

import arterraWines from "./db/virginiaWine/arterraWines";
import estateVineyards from "./db/virginiaWine/estateVineyards";

import virginiaWine from "./db/virginiaWine";
import marylandWine from "./db/marylandWine";

// Set up the express app
const app = express();

/**
 * 
 * 

NOTE: This is how we'd enable POST requests
if it's ever needed

  // Parse incoming requests data
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.post("/pair/wine", (req, res) => {
    if (!req.body.title) {
      return res.status(400).send({
        success: "false",
        message: "title is required"
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: "false",
        message: "description is required"
      });
    }
    const todo = {
      id: db.length + 1,
      title: req.body.title,
      description: req.body.description
    };
    db.push(todo);
    return res.status(201).send({
      success: "true",
      message: "todo added successfully",
      todo
    });
  });

*/

app.get("/pair/wine", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "VA Wine retrieved successfully",
    virginiaWine: virginiaWine, //temporary
    // virginiaWine: arterraWines,
    // marylandWine: marylandWine, //temporary
    redWine: [
      /**
       * TODO: filter virginiaWine and marylandWine
       * to return only RED wine
       */
    ],
    whiteWhine: [
      /**
       * TODO: filter virginiaWine and marylandWine
       * to return only WHITE wine
       */
    ]
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

/**
 * NOTE:
 * Info on this file can be found here
 *
 * https://medium.com/@purposenigeria/build-a-restful-api-with-node-js-and-express-js-d7e59c7a3dfb
 */
