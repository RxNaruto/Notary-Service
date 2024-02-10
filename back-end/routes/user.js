const express = require("express");
const { User } = require("../database/db");
const router = express.Router();
const jwt =require("jsonwebtoken");
const {userSchema} = require("../types/user");
const { JWT_SECRET } = require("../config");
const { userAuthMiddleware } = require("../middleware/userMiddleware");

router.get("/",(req,res)=>{
    res.json({
        msg:"user Router working fine"
    })
})

router.post("/signup",async(req,res)=>{
    const body = req.body;
    const userValidation = userSchema.safeParse(body);
    if(!userValidation.success){
        return res.status(404).json({
            msg: "Incorrect input"
        })

    }
    
    const newUser = await User.create({
        username: body.username,
        password: body.password
    })
    const userId = newUser._id
    const token = jwt.sign({userId},JWT_SECRET);

    if(newUser){
        res.json({
            msg: "User created Successfully",
            token: token
        })
    }
    else{
        res.status(500).json({
            msg: "Internal Server error"
        })
    }
})
router.get("/checkin",userAuthMiddleware,(req,res)=>{
    res.json({
        msg: "you are logged in"
    })

})





module.exports=router; 