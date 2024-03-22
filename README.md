# Air_Tiket_booking

Register User

POST /api/register This endpoint should allow users to register. Hash the password on store

Login User
Route: POST /api/login
Request Body: { email, password }

POST /api/login This endpoint should allow users to login. Return JWT token on successful login. 201
Success (200): User logged in successfully, returns JWT token.
Error (401): Unauthorized if login credentials are incorrect.
Error (500): Internal server error.



image

GET /api/flights This endpoint should return a list of all available flights.

image

200 GET /api/flights/:id This endpoint should return the details of a specific flight identified by its ID.

image

200 POST /api/flights This endpoint should allow users to add new flights to the system. (Protected Route)

image

201 PUT / PATCH /api/flights/:id This endpoint should allow users to update the details of a specific flight identified by its ID. (Protected Route) 204 DELETE /api/flights/:id This endpoint should allow users to delete a specific flight identified by its ID. (Protected Route)

image

202 POST /api/booking This endpoint should allow the user to book flights. (Protected Route) 201 GET /api/dashboard This point should list all the bookings so far with the user and flight details. (Populate the entire flight and user data, and not just id’s) (Protected Route) 200 PUT/PATCH /api/dashboard/:id This endpoint should allow the user to edit / update a booking. (Protected Route) 204 DELETE /api/dashboard/:id This endpoint should allow the user to delete a booking (Protected Route) 202
