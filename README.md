# express-api-pets-back-end

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