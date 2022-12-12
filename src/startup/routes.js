const express = require("express");
const cors = require("cors");
// const home = require("../routes/home");
const users = require("../routes/users");
const pdf = require("../routes/pdf");
const recognizeImage = require("../routes/recognizeImage");

//const whitelist = ["http://localhost:5000", "http://localhost:3000"];

showRequest = (req, res, next) => {
  console.log("(" + req.method + "):", req.originalUrl);
  next();
};

module.exports = function (app) {
  //---------------------------------
  app.use(cors());
  app.use(express.json());
  //----------------------------------
  // app.use("/", home);
  // app.use("/api/user",showRequest, users);
  // app.use("/api/pdf/",showRequest, pdf);
  app.use("/api/recognizeImage/",showRequest, recognizeImage);
  
  //----------------------------------
};
