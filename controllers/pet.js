// controllers/pet.js

const express = require("express");
const router = express.Router({ mergeParams: true });
const Pet = require("../models/pet");

// Routes go here

/*

HTTP Method  Controller  Response  URI             Use Case
POST         create      201       /pets           Create a pet
GET          index       200       /pets           List pets
GET          show        200       /pets/:petId    Get a single pet
PUT          update      200       /pets/:petId    Update a pet
DELETE       deletePet   200       /pets/:petId    Delete a pet

*/

// POST /pets
// Create a new pet in the database
router.post("/", async (req, res) => {
  try {
    // Reject very short pet names before saving to the database
    if (req.body.name.trim().length < 3) {
      throw new Error("Pet name must be at least 3 characters.");
    }

    // Type is required so each pet has a category like Dog or Cat
    if (!req.body.type) {
      throw new Error("Please provide the type of pet.");
    }

    // If no image was provided, use a fallback image
    if (!req.body.image) {
      req.body.image =
        "https://sugarplumnannies.com/wp-content/uploads/2015/11/dog-placeholder.jpg";
    }

    // Save the new pet using data from the request body
    const newPet = await Pet.create(req.body);

    // 201 = successfully created a new resource
    res.status(201).json(newPet);
  } catch (error) {
    // 500 = something went wrong on the server
    res.status(500).json({ error: error.message });
  }
});

// GET /pets
// Return all pets from the database
router.get("/", async (req, res) => {
  try {
    // Find every pet in the collection
    const foundPets = await Pet.find();

    // 200 = request worked successfully
    res.status(200).json(foundPets);
  } catch (error) {
    // 500 = something went wrong on the server
    res.status(500).json({ error: error.message });
  }
});

// GET /pets/:petId
// Return one pet by its id
router.get("/:petId", async (req, res) => {
  try {
    // Find the pet that matches the id from the URL
    const foundPet = await Pet.findById(req.params.petId);

    // If no pet exists with that id, send 404
    if (!foundPet) {
      return res.status(404).json({ error: "Pet not found." });
    }

    // 200 = request worked successfully
    res.status(200).json(foundPet);
  } catch (error) {
    // 500 = something went wrong on the server
    res.status(500).json({ error: error.message });
  }
});

// DELETE /pets/:petId
// Delete one pet by its id
router.delete("/:petId", async (req, res) => {
  try {
    // Find the pet by id and delete it
    const deletedPet = await Pet.findByIdAndDelete(req.params.petId);

    // If no pet was found, send 404
    if (!deletedPet) {
      return res.status(404).json({ error: "Pet not found." });
    }

    // 200 = delete worked
    res.status(200).json(deletedPet);
  } catch (error) {
    // 500 = something went wrong on the server
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
