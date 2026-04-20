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

## How to Run

1. Install dependencies:
   - `npm install`

2. Add your MongoDB connection string to `.env`:
   - `MONGODB_URI=your_mongodb_connection_string_here`

3. Start the development server:
   - `npm run dev`

4. Test routes using Postman or `curl`

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

## Step 5 🐼
- Added the `PUT /pets/:petId` route
- Used `Pet.findByIdAndUpdate()` to update one pet by id
- Returned the updated pet in the response
- Added `404 Not Found` handling when the pet does not exist

### Why it matters
- This route lets the app edit pet information already stored in the database
- It completes the update part of CRUD

### Engineering principle used
- `CRUD` → Update
- `REST` → `PUT /pets/:petId` is the standard update route
- `Error Handling` → return `404` if the pet is missing

---

## Step 6 🦊
- Installed the `cors` package
- Added CORS middleware in `server.js`
- Allowed requests from `http://localhost:5173`
- Added a basic `users` route to support future owner-user relationships

### Why it matters
- This lets a front-end app talk to the API from the browser
- It prevents browser blocking when the front end and back end use different local addresses

### Engineering principle used
- `Middleware` → run logic before requests reach routes
- `Security` → allow only trusted origins
- `Client-Server Communication` → connect the front end and back end safely

---

## Key Takeaways
- Built a back-end API with `Express` and `MongoDB`
- Practiced full `CRUD` operations
- Used `Mongoose` models and route controllers
- Added validation for cleaner pet data
- Added `CORS` so a browser front end can connect safely
- Tested API endpoints with `Postman` and `curl`

---

## Conclusion
This project built a complete pets API that can create, read, update, and delete pet data. It also introduced important back-end patterns like validation, routing, middleware, and client-server communication. These are core skills used in real software engineering work.

---