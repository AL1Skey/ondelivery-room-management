/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     description: Login with username and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: Successful login
 *       401:
 *         description: Unauthorized
 * /register:
 *   post:
 *     summary: User registration
 *     description: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *               - role
 *     responses:
 *       200:
 *         description: Successful registration
 *       400:
 *         description: Bad request
 * /forgot-password:
 *   post:
 *     summary: Forgot password
 *     description: Send password reset email to user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *             required:
 *               - username
 *     responses:
 *       200:
 *         description: Password reset email sent
 *       404:
 *         description: User not found
 * /reset-password:
 *   post:
 *     summary: Reset password
 *     description: Reset user's password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               token:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *               - token
 *     responses:
 *       200:
 *         description: Password reset successful
 *       400:
 *         description: Bad request
 * /rooms:
 *   get:
 *     summary: Get all rooms
 *     description: Retrieve a list of all rooms
 *     responses:
 *       200:
 *         description: Successful operation
 * /booking/{id}:
 *   get:
 *     summary: Get room by ID
 *     description: Retrieve a room by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the room
 *     responses:
 *       200:
 *         description: Successful operation
 *       404:
 *         description: Room not found
 *   put:
 *     summary: Update room
 *     description: Update a room by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the room
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *             required:
 *               - name
 *     responses:
 *       200:
 *         description: Room updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Room not found
 *   delete:
 *     summary: Delete room
 *     description: Delete a room by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the room
 *     responses:
 *       204:
 *         description: Room deleted successfully
 *       404:
 *         description: Room not found
 * /bookings:
 *   get:
 *     summary: Get all bookings
 *     description: Retrieve a list of all bookings
 *     responses:
 *       200:
 *         description: Successful operation
 * /bookings/{id}:
 *   get:
 *     summary: Get booking by ID
 *     description: Retrieve a booking by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the booking
 *     responses:
 *       200:
 *         description: Successful operation
 *       404:
 *         description: Booking not found
 *   post:
 *     summary: Create booking
 *     description: Create a new booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               roomid:
 *                 type: integer
 *               time:
 *                 type: string
 *               description:
 *                 type: string
 *               userid:
 *                 type: integer
 *             required:
 *               - roomid
 *               - time
 *               - userid
 *     responses:
 *       201:
 *         description: Booking created successfully
 *       400:
 *         description: Bad request
 *   put:
 *     summary: Update booking
 *     description: Update a booking by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               roomid:
 *                 type: integer
 *               time:
 *                 type: string
 *               description:
 *                 type: string
 *               userid:
 *                 type: integer
 *             required:
 *               - roomid
 *               - time
 *               - userid
 *     responses:
 *       200:
 *         description: Booking updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Booking not found
 *   delete:
 *     summary: Delete booking
 *     description: Delete a booking by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the booking
 *     responses:
 *       204:
 *         description: Booking deleted successfully
 *       404:
 *         description: Booking not found
 */