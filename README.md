# Air_Tiket_booking

This app Mostly Focuses on the crud operation

Register User

POST /api/register This endpoint should allow users to register. Hash the password on store

Login User
Route: POST /api/login
Request Body: { email, password }

POST /api/login This endpoint should allow users to login. Return JWT token on successful login. 201
Success (200): User logged in successfully, returns JWT token.
Error (401): Unauthorized if login credentials are incorrect.
Error (500): Internal server error.


Flights
Get All Flights
Route: GET /api/flights
Response:
Success (200): Array of flight objects.
Error (500): Internal server error.

GET /api/flights This endpoint should return a list of all available flights.


Get Flight by ID
Route: GET /api/flights/:id
Response:
Success (200): Flight object with the given ID.
Error (404): Flight not found if ID does not exist.
Error (500): Internal server error.
200 GET /api/flights/:id This endpoint should return the details of a specific flight identified by its ID.

Create New Flight
Route: POST /api/flights
Request Body: { airline, flightNo, departure, arrival, departureTime, arrivalTime, seats, price }
Response:
Success (201): New flight created successfully.
Error (400): Bad request if required fields are missing or invalid.
Error (500): Internal server error.
200 POST /api/flights This endpoint should allow users to add new flights to the system. (Protected Route)


Update Flight
Route: PUT /api/flights/:id
Request Body: Updated flight details.
Response:
Success (200): Flight details updated successfully.
Error (404): Flight not found if ID does not exist.
Error (500): Internal server error.


Delete Flight
Route: DELETE /api/flights/:id
Response:
Success (200): Flight deleted successfully.
Error (404): Flight not found if ID does not exist.
Error (500): Internal server error.
201 PUT / PATCH /api/flights/:id This endpoint should allow users to update the details of a specific flight identified by its ID. (Protected Route) 204 DELETE /api/flights/:id This endpoint should allow users to delete a specific flight identified by its ID. (Protected Route)


