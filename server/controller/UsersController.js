const { QueryTypes } = require('sequelize');
const {User, sequelize} = require('../models/index');
const { use } = require('../routes');

class UserController{
    static async getUsers(req,res,next){
        try {
            const users = await sequelize.query('SELECT id,name FROM "Users"',{
                type:QueryTypes.SELECT
            })
            
            return res.status(200).json(users)
            
        } catch (error) {
 
            next(error)
            
        }
    }

    static async getUserById(req,res,next){
        try {
            const {id} = req.params;
            const [user,_] = await sequelize.query('SELECT * FROM "Users" WHERE id=:id',{
                replacements:{id},
                type:QueryTypes.SELECT
            })
            return res.status(200).json(user)
        } catch (error) {
            console.log("Error in GetUserById")
            next(error)
        }
    }

    static async createUser(req,res,next){
        try {
            const body = req.body;
            const user = await User.create(body);
            res.status(200).json({message:"User Has Been Created",user})
        }
        catch (error) {
            console.log("Error in CreateUser")
            next(error)
        }
    }

    static async updateUser(req,res,next){
        try {
            const {id} = req.params;
            const body = req.body;
            const user = await User.update(body,{
                where:{
                    id
                }
            });
            res.status(200).json({message:"User Has Been Updated"})
        } catch (error) {
            next(error)
        }
    }

    static async deleteUser(req,res,next){
        try {
            const {id} = req.params;
            const user = await User.destroy({
                where:{
                    id
                }
            });
            res.status(200).json({message:"User Has Been Deleted"})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController;