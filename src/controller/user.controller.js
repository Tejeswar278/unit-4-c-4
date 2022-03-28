const express = require("express");
const User = require("../models/user.model")

const router = express.Router();

router.get("/", async (req,res)=>{
    const users = awiat User.find({}).lean().exec();
    return res.status(200).json({data: users});
})

module.exports = router;