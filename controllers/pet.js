// controllers/pet.js

const express = require("express");
const router = express.Router();
const Pet = require("../models/pet");


// Routes go here

/*

HTTP Method	Controller	Response	URI	Use Case
POST	create	200	/pets	Create a pet
GET	index	200	/pets	List pets
GET	show	200	/pets/:petId	Get a single pet
PUT	update	200	/pets/:petId	Update a pet
DELETE	deletePet	204	/pets/:petId	Delete a pet

*/

// POST	create	200	/pets	Create a pet

// POST /pets
// Create a new pet in the database
router.post("/", async (req, res) => {
  try {
    // Save the new pet using data from the request body
    const newPet = await Pet.create(req.body);

    // 201 = successfully created a new resource
    res.status(201).json(newPet);
  } catch (error) {
    // 500 = something went wrong on the server
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
    