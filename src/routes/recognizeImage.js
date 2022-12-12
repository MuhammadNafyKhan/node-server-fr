const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();
const recognizeImageController = require("../controllers/recognizeImageController");

const multer = require("multer");

// //Configuration for Multer
// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "/home/tk-lpt-739/Desktop/Face_Recognition_API/uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// // Multer Filter
// const multerFilter = (req, file, cb) => {
//   if (file.mimetype.split("/")[1] === "pdf") {
//     cb(null, true);
//   } else {
//     cb(new Error("Not a PDF File!!"), false);
//   }
// };

// //Calling the "multer" Function
// var upload = multer({
//   storage: multerStorage,
//   // fileFilter: multerFilter,
// });

// const upload = multer({ storage: storage });
// router.post("/img", upload.single("file"), recognizeImageController.recognize);
router.post("/img", recognizeImageController.recognize);

module.exports = router;
