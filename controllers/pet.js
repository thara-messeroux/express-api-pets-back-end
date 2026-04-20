
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

// Import the pet model
router.post("/", async (req, res) => {
  try {
    const newPet = await Pet.create(req.body);
    res.json(newPet);
  } catch (error) {
    res.jsaon({ error: error.message });
  }
});



module.exports = router;
    