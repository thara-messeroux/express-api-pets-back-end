const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const logger = require("morgan");

require("./db/connection");

app.use(express.json());
app.use(logger("dev"));

// Routes go here

app.listen(3000, () => {
  console.log("The express app is ready!");
});
