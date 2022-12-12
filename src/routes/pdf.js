const express = require("express");

const router = express.Router();
const pdfController = require("../controllers/pdfController");


router.post("/generatePDF", pdfController.generatePDF);

module.exports = router;
