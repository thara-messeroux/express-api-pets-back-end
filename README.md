# express-api-pets-back-end

## Intro
This project is a back-end API for managing pets using Express and MongoDB.

It allows a developer to create, read, update, and delete pet data. It also demonstrates core back-end concepts like routing, models, database connections, controllers, and RESTful CRUD operations.

## Concepts Practiced
- `Express` for building the server
- `MongoDB` for storing data
- `Mongoose` for models and schemas
- `CRUD` operations
- `RESTful routes`
- `Postman` or `curl` for testing API endpoints

---

## Step 1 🐣
- Updated the `POST /pets` route to return `201 Created`
- Added better error handling with `500 Internal Server Error`
- Kept Billie’s custom pet fields working like `image`, `type`, and `breed`

### Why it matters
- `201` makes it clear a new pet was created
- Better status codes make the API more professional and easier to debug

### Engineering principle used
- `CRUD` → Create
- `REST` → use the correct HTTP status code
- `Error Handling` → send clear server error responses

---

## Step 2 🐥
- Added the `GET /pets` index route
- Used `Pet.find()` to fetch all pets from MongoDB
- Returned `200 OK` when the request succeeds
- Returned `500` with an error message if something goes wrong

### Why it matters
- This route lets the app list all saved pets
- It is the main “read all data” route in a CRUD API

### Engineering principle used
- `CRUD` → Read
- `REST` → `GET /pets` follows a standard API pattern
- `Separation of Concerns` → route logic stays in the controller

---

## Step 3 🐶
- Added the `GET /pets/:petId` show route
- Used `Pet.findById()` to fetch one pet by its id
- Added `404 Not Found` handling when the pet does not exist
- Kept `500` handling for server errors

### Why it matters
- This route lets the app open one pet’s details
- It teaches how to use route params and handle missing data safely

### Engineering principle used
- `CRUD` → Read one
- `REST` → `GET /pets/:petId` is the standard show route
- `Error Handling` → send `404` when the pet is missing

---

## Step 3.6 🐻
- Added a check to require the pet `type`
- Added a fallback default image when no image is provided
- Kept the pet name length validation in the create route

### Why it matters
- This keeps pet data more complete
- It prevents empty image fields from breaking the UI
- It improves data quality before saving to MongoDB

### Engineering principle used
- `Validation` → require important fields
- `Defensive Programming` → handle missing input safely
- `User Experience` → provide a default image instead of a blank one

---

## Step 4 🐱
- Added the `DELETE /pets/:petId` route
- Used `Pet.findByIdAndDelete()` to remove one pet by id
- Added `404 Not Found` handling when the pet does not exist
- Tested delete success and delete-not-found behavior

### Why it matters
- This route lets the app remove pets from the database
- It completes the delete part of CRUD

### Engineering principle used
- `CRUD` → Delete
- `REST` → `DELETE /pets/:petId` is the standard delete route
- `Error Handling` → return `404` if the pet is already gone

---