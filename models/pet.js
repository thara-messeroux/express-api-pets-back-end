// models/pet.js

// Import mongoose

const mongoose = require("mongoose");


// Define the pet schema

const petSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
    required: true,
  },
  breed: String,
});

