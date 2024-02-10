const express = require("express");
const router = express.Router();


router.get("/",(req,res)=>{
    res.json({
        msg:"admin route working fine"
    })
})
module.exports=router; 