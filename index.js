const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
var multer = require('multer');
var upload = multer({dest: "uploads/"});

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


dotenv.config({ path: path.join(__dirname, ".env") });

require("./src/startup/routes")(app);

const port = process.env.PORT || 3500;
app.listen(port, () => {
  console.log(`Secure Server listning on port ${port}`);
});
