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
  image: String,
  type: {
    type: String,
    required: true,
  },
  breed: String,
  owner: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  }
}, 
{
  timestamps: true,
});

// Create the pet model

const Pet = mongoose.model("Pet", petSchema);
module.exports = Pet;
