const {Rooms} = require('../models/index')
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
            console.log(rooms)
            res.status(200).json(rooms)
        } catch (error) {
            next(error)
        }
    }

    static async getRoomById(req,res,next){
        try {
            const {id} = req.params;
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