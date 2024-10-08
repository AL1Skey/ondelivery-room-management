const express = require("express")
const { Authentication, Authorization } = require("../middleware/auth")
const AuthController = require("../controller/AuthController")
const BookingControllers = require("../controller/BookingController")
const RoomsControllers = require("../controller/RoomsController")
const errHandling = require("../middleware/errHandling")
const UserController = require("../controller/UsersController")

const router = express.Router()

// Authentication
router.post('/login',AuthController.login)
router.post('/register',AuthController.register)
router.post('/forgot-password',AuthController.forgotPassword)
router.put('/reset-password',AuthController.changePassword)
router.put('/change-role/:id',Authentication,Authorization.primaryRole,AuthController.changeRole)

// Users
router.get('/users',Authentication,Authorization.primaryRole,UserController.getUsers)
router.post('/users',Authentication,Authorization.primaryRole,UserController.createUser)
router.get('/users/:id',Authentication,Authorization.primaryRole,UserController.getUserById)
router.put('/users/:id',Authentication,Authorization.primaryRole,UserController.updateUser)
router.delete('/users/:id',Authentication,Authorization.primaryRole,UserController.deleteUser)


// Rooms
router.get('/rooms/overview',RoomsControllers.getAllDataRooms)
router.get('/rooms',RoomsControllers.getRooms)
router.get('/rooms/:id',Authentication,Authorization.primaryRole,RoomsControllers.getRoomById)
router.post('/rooms',Authentication,Authorization.primaryRole,RoomsControllers.createRoom)
router.put('/rooms/:id',Authentication,Authorization.primaryRole,RoomsControllers.updateRoom)
router.delete('/rooms/:id',Authentication,Authorization.primaryRole,RoomsControllers.deleteRoom)

// Booking
router.get('/bookings',Authentication,Authorization.primaryRole,BookingControllers.getBookings)
router.get('/bookings/:id',Authentication,Authorization.primaryRole,BookingControllers.getBookingById)
router.post('/bookings',Authentication,Authorization.primaryRole,BookingControllers.createBooking)
router.put('/bookings/:id',Authentication,Authorization.primaryRole,BookingControllers.updateBooking)
router.delete('/bookings/:id',Authentication,Authorization.primaryRole,BookingControllers.deleteBooking)

router.use(errHandling)

module.exports = router


/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BasicAuth:
 *       type: http
 *       scheme: basic
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
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
 *               name:
 *                 type: string
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
 *   put:
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
 * /change-role/{id}:
 *   put:
 *      summary: Change user role
 *      description: Update the role of a user with the specified ID
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          type: integer
 *          description: The ID of the user to update
 *      security:
 *        - BearerAuth: []
 *      responses:
 *      200:
 *          description: Role updated successfully
 *      401:
 *          description: Unauthorized
 *      404:
 *          description: User not found
 *      500:
 *          description: Internal Server Error
 * /rooms:
 *   get:
 *     summary: Get all rooms
 *     description: Retrieve a list of all rooms
 *     responses:
 *       200:
 *         description: Successful operation
 *   post:
 *     summary: Create room
 *     description: Create a new room
 *     security:
 *       - BearerAuth: []
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
 *       201:
 *         description: Room created successfully
 *       400:
 *         description: Bad request
 * /rooms/overview:
 *   get:
 *     summary: Get rooms overview
 *     description: Retrieve a count of total, occupied, and empty rooms 
 *     responses:
 *       200:
 *         description: Successful operation
 *       500:
 *         description: Internal Server Error
 * /rooms/{id}:
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
 *     security:
 *       - BearerAuth: []
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
 *     security:
 *       - BearerAuth: []
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
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       204:
 *         description: Room deleted successfully
 *       404:
 *         description: Room not found
 * /bookings:
 *   get:
 *     summary: Get all bookings
 *     description: Retrieve a list of all bookings
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *   post:
 *     summary: Create booking
 *     description: Create a new booking
 *     security:
 *       - BearerAuth: []
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
 *                 format: date-time
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
 * /bookings/{id}:
 *   get:
 *     summary: Get booking by ID
 *     description: Retrieve a booking by its ID
 *     security:
 *       - BearerAuth: []
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
 *     security:
 *       - BearerAuth: []
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
 *                 format: date-time
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
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       204:
 *         description: Booking deleted successfully
 *       404:
 *         description: Booking not found
 */

//asdasdfasdf




//asdasdfasdf