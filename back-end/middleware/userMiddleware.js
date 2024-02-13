const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
const { User } = require("../database/db");

const userAuthMiddleware=(req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(404).json({
            msg: "User not registered"
        })
    }
    const token = authHeader.split(" ")[1];
    try{
        const decoded = jwt.verify(token,JWT_SECRET);
        req.userId= decoded.userId;
        next();
    }catch(err){
        return res.status(403).json({});
    }
};

const userLoginMiddleware = async(req,res,next)=>{
    const username= req.headers.username;
    const password= req.headers.password;

    const checkUser = await User.findOne({
        username: username,
        password: password
    })
    if(checkUser){
        next();
    }
    else{
        res.status(404).json({
            msg: "User not found"
        })
    }
}
module.exports={
    userAuthMiddleware,
    userLoginMiddleware
}