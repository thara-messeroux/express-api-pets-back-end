
// models/user.js

// Import mongoose
const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
},{
    timestamps: true,
})

// Create the user model

const User = mongoose.model("User", userSchema);

// Export the user model

module.exports = User;
