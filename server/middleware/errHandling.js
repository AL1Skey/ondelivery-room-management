const { ValidationError } = require("sequelize");

const errHandling = (err, req, res,next) => {
    console.log("masuk error handling")
    console.log(err)
    if(err.name==="SequelizeValidationError"){
        res.status(400).json({message:err.errors[0].message
        })
    }
    if(err instanceof ValidationError){
        res.status(400).json({message:err.errors[0].message})
    }
    else if(err.msg){
        res.status(400).json({message:err.msg})
    }
    else{
        res.status(500).json({message:"Internal Server Error"})
    }
};

module.exports = errHandling;
