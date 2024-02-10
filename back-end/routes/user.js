const express = require("express");
const { User } = require("../database/db");
const router = express.Router();

router.get("/",(req,res)=>{
    res.json({
        msg:"user Router working fine"
    })
})

router.post("/signup",async(req,res)=>{
    const body = req.body;
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