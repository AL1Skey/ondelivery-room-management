const {User} = require("../models/index");
const { verifyToken } = require("../tools/jwt");

const Authentication = async(req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw { msg: "Invalid Token" };
    } else {
      const [type, access_token] = authorization.split(" ");
      

      if (type !== "Bearer") {
        throw { msg: "Invalid Token" };
      }
      
      const { id } = verifyToken(access_token);

      if (!id) {
        throw { msg: "Authentication Failed" };
      } else {
        const user = await User.findByPk(id);
        console.log(user);
        if (!user) {
          throw { msg: "User Not Found" };
        } else {
          req.user = {
            ...req.user,
            id: user.id,
            name: user.name,
            role: user.role,
          };
          next();
        }
      }
    }
  } catch (error) {
    next(error);
  }
};

class Authorization {
  static guestRole(req, res, next) {
    try {
      if (req.user.role.toLowerCase() === "guest") {
        next();
      } else {
        throw {msg:"User is not Guest"}
      }
    } catch (error) {
      next(error);
    }
  }

  static primaryRole(req,res,next){
    try {
        if(req.user.role.toLowerCase()!=="guest"){
            next()
        }
        else{
            throw {msg:"User is not registered as workers of OnDelivery"}
        }
    } catch (error) {
        next(error)
    }
  }
}

module.exports={
    Authentication,
    Authorization
}