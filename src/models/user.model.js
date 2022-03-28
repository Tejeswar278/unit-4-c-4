const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: false},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const User  = mongoose.model("user", userSchema);

userSchema.pre("save", function(next){
    if(!this.isModified("password")) return next();
})

module.exports = User;