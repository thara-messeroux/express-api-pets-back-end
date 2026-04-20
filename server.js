// server.js

// Import dependencies
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const app = express();

// Import routes
const petRoutes = require("./controllers/pet");
const userRoutes = require("./controllers/user");

// Connect to database
require("./db/connection");

// Middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(logger("dev"));

// Routes
app.use("/pets", petRoutes);
// app.use("/users", userRoutes);

// Start server
app.listen(3000, () => {
  console.log("The express app is ready!");
});
