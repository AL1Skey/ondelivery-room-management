const { QueryTypes } = require('sequelize');
const {Rooms, sequelize} = require('../models/index')
class RoomsController{
    static async createRoom(req,res,next){
        try {
            const body = req.body;
            const room = await Rooms.create(body);
            res.status(200).json({message:"Room Has Been Created",body})
        } catch (error) {
            next(error)
        }
    }
    static async getRooms(req,res,next){
        try {
            const rooms = await Rooms.findAll();
 
            res.status(200).json(rooms)
        } catch (error) {
            next(error)
        }
    }

    static async getAllDataRooms(req,res,next){
        try {
            let totalRooms = await sequelize.query('SELECT COUNT(id) FROM "Rooms"',{
                type:sequelize.QueryTypes.SELECT
            })
            let occupiedRooms = await sequelize.query('SELECT COUNT(roomid) FROM "BookingRooms"',{
                type:QueryTypes.SELECT
            })
            let emptyRooms = await sequelize.query('SELECT COUNT(r.id) FROM "Rooms" r LEFT JOIN "BookingRooms" b ON r.id=b.roomid WHERE b.roomid is null',{
                type:QueryTypes.SELECT
            })
            totalRooms = totalRooms[0].count;
            occupiedRooms = occupiedRooms[0].count;
            emptyRooms = emptyRooms[0].count;
            res.status(200).json({
                totalRooms,
                occupiedRooms,
                emptyRooms
            })
        } catch (error) {
            next(error)
        }
    }

    static async getRoomById(req,res,next){
        try {
            const {id} = req.params;
            console.log(id)
            const room = await Rooms.findByPk(id);
            res.status(200).json({room})
        } catch (error) {
            next(error)
        }
    }

    static async updateRoom(req,res,next){
        try {
            const {id} = req.params;
            const body = req.body;
            const room = await Rooms.update(body,{
                where:{
                    id
                }
            });
            res.status(200).json({message:"Room Has Been Updated"})
        } catch (error) {
            next(error)
        }
    }

    static async deleteRoom(req,res,next){
        try {
            const {id} = req.params;
            const room = await Rooms.destroy({
                where:{
                    id
                }
            });
            res.status(200).json({message:"Room Has Been Deleted"})
        } catch (error) {
            next(error)
        }
    }


}

module.exports = RoomsController