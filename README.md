# Air_Tiket_booking


Air Ticket Booking API Documentation
User Authentication
Register User
Route: POST /api/register
Request Body: { name, email, password }
Response:
Success (201): New user registered successfully.
Error (400): Bad request if required fields are missing or invalid.
Error (409): Conflict if email already exists.
Login User
Route: POST /api/login
Request Body: { email, password }
Response:
Success (200): User logged in successfully, returns JWT token.
Error (401): Unauthorized if login credentials are incorrect.
Error (500): Internal server error.
Flights
Get All Flights
Route: GET /api/flights
Response:
Success (200): Array of flight objects.
Error (500): Internal server error.
Get Flight by ID
Route: GET /api/flights/:id
Response:
Success (200): Flight object with the given ID.
Error (404): Flight not found if ID does not exist.
Error (500): Internal server error.
Create New Flight
Route: POST /api/flights
Request Body: { airline, flightNo, departure, arrival, departureTime, arrivalTime, seats, price }
Response:
Success (201): New flight created successfully.
Error (400): Bad request if required fields are missing or invalid.
Error (500): Internal server error.
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
Bookings
Get All Bookings
Route: GET /api/dashboard
Response:
Success (200): Array of booking objects.
Error (500): Internal server error.
Book Flight
Route: POST /api/booking
Request Body: { flight_id }
Response:
Success (201): Flight booked successfully, returns booking details.
Error (400): Bad request if required fields are missing or invalid.
Error (500): Internal server error.
Update Booking
Route: PUT /api/booking/:id
Request Body: Updated booking details.
Response:
Success (200): Booking details updated successfully.
Error (404): Booking not found if ID does not exist.
Error (500): Internal server error.
Cancel Booking
Route: DELETE /api/booking/:id
Response:
Success (200): Booking canceled successfully.
Error (404): Booking not found if ID does not exist.
Error (500): Internal server error.