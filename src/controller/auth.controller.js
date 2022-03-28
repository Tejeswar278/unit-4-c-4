const jwt = require("jsonwebtoken")
require("dotenv").config();

const User = require("../models/user.model")

const newToken = (user) => {
    return jwt.sign({id: user.id}, process.env.JWT_KEY);
}

const signup = async (req,res) => {
    try {
        const user = await User.create(req.body);
        const token  = newToken(user);
        return res.status(201).json({data: {token}})
    } catch (error) {
        return res.status(500).json({status: "failed", message: error.message})
    }
    
};

const signin = async (req,res) => {
    return res.send("User");
};

module.exports = {
    signup,
    signin,
}
