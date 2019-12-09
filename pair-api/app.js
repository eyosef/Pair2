const serverless = require("serverless-http");
import express from "express";
import bodyParser from "body-parser";

import virginiaWine from "./db/virginiaWine";
import marylandWine from "./db/marylandWine";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/pair/wine", (req, res) => {
  res.send({
    success: "true",
    message: "VA Wine retrieved successfully",
    virginiaWine: virginiaWine //temporary
    // marylandWine: marylandWine, //temporary
    // redWine: [
    //   /**
    //    * TODO: filter virginiaWine and marylandWine
    //    * to return only RED wine
    //    */
    // ],
    // whiteWhine: [
    //   /**
    //    * TODO: filter virginiaWine and marylandWine
    //    * to return only WHITE wine
    //    */
    // ]
  });
});

// const PORT = 5000;

// app.listen(PORT, () => {
//   console.log(`server running on port ${PORT}`);
// });

module.exports.handler = serverless(app);

/**
 * NOTE:
 * Info on this file can be found here
 *
 * https://medium.com/@purposenigeria/build-a-restful-api-with-node-js-and-express-js-d7e59c7a3dfb
 */

/**
 * https://91j3tcvs6i.execute-api.us-east-1.amazonaws.com/dev/pair/wine
 */
