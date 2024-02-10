const express = require("express");
const { User } = require("../database/db");
const router = express.Router();
const {userSchema} = require("../types/user")

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
    if(newUser){
        res.json({
            msg: "User created Successfully"
        })
    }
    else{
        res.status(500).json({
            msg: "Internal Server error"
        })
    }
})





module.exports=router; 