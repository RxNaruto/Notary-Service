const express = require("express");
const { Admin } = require("../database/db");
const router = express.Router();


router.get("/",(req,res)=>{
    res.json({
        msg:"admin route working fine"
    })
})

router.post("/signup",async(req,res)=>{
    const body = req.body;
    const newUser = await Admin.create({
        username: body.username,
        password: body.password
    })
    if(newUser){
        res.json({
            msg: "Admin created Successfully"
        })
    }
    else{
        res.status(500).json({
            msg: "Internal Server error"
        })
    }
})

module.exports=router; 