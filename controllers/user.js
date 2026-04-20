const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/user");

/*

User Routes
Create POST /users - create a user

*/

// Merge params example
// /users/:userId
// router.get("/:userId", (req, res) => {
//   res.json(req.params);
// });

router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

module.exports = router;
