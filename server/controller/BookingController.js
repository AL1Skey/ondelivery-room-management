const { QueryTypes } = require("sequelize");
const { BookingRooms, sequelize } = require("../models/index");
class BookingControllers {
  static async createBooking(req, res, next) {
    try {
      const body = req.body;
      console.log(body);
      body.userid.map(async (id) => {
        await BookingRooms.create({ ...body, userid:id });
      });
      res.status(200).json({ message: "Booking Has Been Created", body });
    } catch (error) {
      next(error);
    }
  }
  static async getBookings(req, res, next) {
    try {
      const [bookings, metadata] = await sequelize.query(
        'SELECT roomid as id,r.name as room,COUNT(userid) as employee,description FROM "BookingRooms" b JOIN "Rooms" r ON r.id=b.roomid JOIN "Users" u ON u.id=b.userid GROUP BY r.name,description,roomid',
        {
          types: QueryTypes.SELECT,
        }
      );
      console.log(bookings);
      res.status(200).json(bookings);
    } catch (error) {
      next(error);
    }
  }

  static async getBookingById(req, res, next) {
    try {
      const { id } = req.params;
      const booking = await BookingRooms.findOne({
        where: {
          roomid:id,
        },
      });
      const [employee] = await sequelize.query(
        'SELECT u.name as name FROM "BookingRooms" b JOIN "Users" u ON u.id=b.userid WHERE b.roomid=:id',
        {
          replacements: { id },
          types: QueryTypes.SELECT,
        }
      );
      const toArray = employee.map(employees => employees);
      // booking.map(bookings => console.log(bookings));
      res.status(200).json({ booking,employee:toArray });
    } catch (error) {
      next(error);
    }
  }

  static async updateBooking(req, res, next) {
    try {
      const { id } = req.params;
      const body = req.body;
      const booking = await BookingRooms.update(body, {
        where: {
          id,
        },
      });
      res.status(200).json({ message: "Booking Has Been Updated" });
    } catch (error) {
      next(error);
    }
  }

  static async deleteBooking(req, res, next) {
    try {
      const { id } = req.params;
      const booking = await BookingRooms.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({ message: "Booking Has Been Deleted" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = BookingControllers;
