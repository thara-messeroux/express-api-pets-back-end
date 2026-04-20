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