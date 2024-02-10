const express = require("express");
const { Admin } = require("../database/db");
const { adminSchema } = require("../types/admin");
const router = express.Router();


router.get("/",(req,res)=>{
    res.json({
        msg:"admin route working fine"
    })
})

router.post("/signup",async(req,res)=>{
    const body = req.body;
    const adminValidation = adminSchema.safeParse(body);
    if(!adminValidation.success){
        return res.status(404).json({
            msg: "Incorrect input"
        })
    }
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