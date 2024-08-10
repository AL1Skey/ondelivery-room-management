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
router.post('/change-password',AuthController.changePassword)

// Users
router.get('/users',UserController.getUsers)
router.get('/users/:id',UserController.getUserById)
router.put('/users/:id',UserController.updateUser)
router.delete('/users/:id',UserController.deleteUser)

// Rooms
router.get('/rooms',RoomsControllers.getRooms)
router.get('/rooms/overview',RoomsControllers.getAllDataRooms)
router.get('/rooms/:id',RoomsControllers.getRoomById)
router.post('/rooms',RoomsControllers.createRoom)
router.put('/rooms/:id',RoomsControllers.updateRoom)
router.delete('/rooms/:id',RoomsControllers.deleteRoom)

// Booking
router.get('/bookings',BookingControllers.getBookings)
router.get('/bookings/:id',BookingControllers.getBookingById)
router.post('/bookings',Authentication,Authorization.primaryRole,BookingControllers.createBooking)
router.put('/bookings/:id',Authentication,Authorization.primaryRole,BookingControllers.updateBooking)
router.delete('/bookings/:id',Authentication,Authorization.primaryRole,BookingControllers.deleteBooking)

router.use(errHandling)

module.exports = router


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
 * /room/{id}:
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
 *     responses:
 *       204:
 *         description: Booking deleted successfully
 *       404:
 *         description: Booking not found
 */