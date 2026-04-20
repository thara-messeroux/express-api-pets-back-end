// server.js

// Import dependencies

const dotenv = require("dotenv");
dotenv.config();

// Import routes and other modules
const petRoutes = require("./controllers/pet");
const userRoutes = require("./controllers/user");
const express = require("express");
const app = express();
const logger = require("morgan");

require("./db/connection");

app.use(express.json());
app.use(logger("dev"));

// Routes go here

/*

HTTP Method	Controller	Response	URI	Use Case
POST	create	200	/pets	Create a pet
GET	index	200	/pets	List pets
GET	show	200	/pets/:petId	Get a single pet
PUT	update	200	/pets/:petId	Update a pet
DELETE	deletePet	204	/pets/:petId	Delete a pet

*/


app.listen(3000, () => {
  console.log("The express app is ready!");
});
